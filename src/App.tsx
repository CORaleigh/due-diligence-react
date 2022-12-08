import React, { useEffect, useRef, useState } from 'react';
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
import FeatureForm from '@arcgis/core/widgets/FeatureForm';
import Search from '@arcgis/core/widgets/Search';
import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';

import Collection from '@arcgis/core/core/Collection';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
import { CalciteAction, CalciteAlert, CalciteButton, CalciteList, CalciteListItem, CalciteModal, CalciteNotice, CalciteScrim } from '@esri/calcite-components-react';

function App() {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [list, setList] = useState<Graphic[]>([]);
  const [submittable, setSubmittable] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [agreed, setAgreed] = useState<boolean>(false);

  const formDiv = useRef<HTMLDivElement>(null);
  const mapDiv = useRef<HTMLDivElement>(null);
  const propertyDiv = useRef<HTMLDivElement>(null);
  const loaded = useRef<boolean>(false);
  const features = useRef<Collection<Graphic>>(new Collection<Graphic>());
  const area = useRef<Graphic>();
  const mapView = useRef<MapView>();
  const featureForm = useRef<FeatureForm>();
  
  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      const view = loadMap();
      view.when(mapViewLoaded);
    }
  },[]);

  const loadMap = () => {
    //load web map by ID
    const webMap = new WebMap({
      portalItem: {
        id: '16c5e73746bd490ab78323e456581e21'
      }
    });
    const view = new MapView({
      map: webMap,
      container: mapDiv.current as HTMLDivElement,
      highlightOptions: {
        fillOpacity: 0,
        haloOpacity: 0
      },
      popup: {
        autoOpenEnabled: false
      }
    });
    mapView.current = view;
    view.ui.move('zoom', 'top-right');
    //add graphics layers to map
    view.map.add(new GraphicsLayer({id: 'submit-area'}));
    view.map.add(new GraphicsLayer({id: 'hover-graphics'}));
    return view;
  }
  const mapViewLoaded = (view: MapView) => {
    const submittals = view.map.allLayers.find(layer => {
      return layer.title === 'Submittals';
    });
    if (submittals) {
      const form = addForm(view, submittals as __esri.FeatureLayer);
      featureForm.current = form;
      featureForm.current.on('value-change', (e) => {
        if (e.fieldName === 'email') {
          validateEmail(form, e, 'email');
        }
        if (e.fieldName === 'phone') {
          validatePhone(form, e, 'phone');
        }        
        //enable submit button if form is submittal, reviewed is Yes, and geometry is set
        setSubmittable(form.viewModel.submittable && form.viewModel.getValues()['reviewed'] === 0 && form.viewModel.feature.geometry !== null);
      });
      featureForm.current.on('submit', (e) => {
        submitForm(form, e, view);
      });
      addMapClick(view, featureForm.current);
      addSearchWidget(view, featureForm.current);
    }
  }
  const addForm = (view: MapView, layer: __esri.FeatureLayer) => {
    const form = new FeatureForm({
      view: view,
      layer: layer,
      container: formDiv.current as HTMLDivElement,
      feature: new Graphic()
    });
    form.viewModel.watch('inputFields',(loaded) =>{
      setTimeout(() => {
        //move map to middle of form after form loaded
        formDiv.current?.querySelectorAll('fieldSet')[0].appendChild(propertyDiv.current as HTMLDivElement);
        setLoading(false);
      },500)
    });
    return form;
  }
  const validateEmail = (form: FeatureForm, e: __esri.FeatureFormValueChangeEvent, field: string) => {
      //handle email address validations
      const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const input = (form.viewModel.inputFields[0] as __esri.InputFieldGroup).inputFields.find(inputField => {
        return inputField.name === field;
      }) as any;
      if (input) {
        if (!(e.value as string).match(regex)) {
          input.valid = false;
          input.errorMessage = 'Not a valid email address format';
        } else {
          input.valid = true;
          input.errorMessage = null;
        }   
      }
 
  }
  const validatePhone = (form: FeatureForm, e: __esri.FeatureFormValueChangeEvent, field: string) => {
    //handle email address validations
    const regex = /^\d{3}-\d{3}-\d{4}$/;
    const input = (form.viewModel.inputFields[0] as __esri.InputFieldGroup).inputFields.find(inputField => {
      return inputField.name === field;
    }) as any;
    if (input) {
      if (!(e.value as string).match(regex)) {
        input.valid = false;
        input.errorMessage = 'Not a valid phone number form, needs to be 999-999-9999';
      } else {
        input.valid = true;
        input.errorMessage = null;
      }   
    }
}
  
  const addDefaultAttributes = (feature: Graphic) => {
    if (feature.getAttribute('planning3').length === 0) {
      feature.setAttribute('planning3', 'N/A');
    }
    if (feature.getAttribute('planning4').length === 0) {
      feature.setAttribute('planning4', 'N/A');
    }    
    feature.setAttribute('planning7a', 1);
    feature.setAttribute('transFrontages', 1);
    feature.setAttribute('emailSent', 1);
    setStatus(feature)
  }
  const setStatus = (feature: Graphic) => {
    feature.setAttribute('Status', 0);
    feature.setAttribute('planningStatus', 0);
    feature.setAttribute('transStatus', 0);
    feature.setAttribute('stormStatus', 0);
    feature.setAttribute('utilitiesStatus', 0);
    feature.setAttribute('forestryStatus', 0);
  }
  const submitForm = (form: FeatureForm, e: __esri.FeatureFormSubmitEvent, view: MapView) => {
    //set feature attributes to form values
    form.feature.attributes = e.values;
    addDefaultAttributes(form.feature);
    //send feature to points layer
    form.layer.applyEdits({addFeatures: [form.feature]}).then(result => {
        //reset form
        const layer = view.map.findLayerById('submit-area') as GraphicsLayer;
        layer.removeAll();
        setList([...[], ...[]]);
        form.feature = new Graphic();
        if (result.addFeatureResults.length) {
          addAreaFeature(view, new Graphic({attributes: { 'ID': result.addFeatureResults[0].objectId}, geometry: area.current?.geometry}));
        }
    });
  }

  const addAreaFeature = (view: MapView, feature: Graphic) => {
    const areasLayer = view.map.allLayers.find(layer => {
      return layer.title === 'Submittal Areas';
    }) as __esri.FeatureLayer;
    if (areasLayer) {
      setStatus(feature);
      areasLayer.applyEdits({addFeatures: [feature]}).then(result => {
        console.log(result);
      });
    }
  }
  const addMapClick = (view: MapView, form: FeatureForm) => {
    const property = view.map.allLayers.find(layer => {
      return layer.title === 'Property';
    });
    if (property) {
        view.on('click', (e: __esri.ViewClickEvent) => {
          view.hitTest(e, {include: property}).then(result => {
            if (result.results.length) {
              if ((result.results[0] as any).graphic) {
                (property as __esri.FeatureLayer).queryFeatures({outSpatialReference: view.spatialReference,outFields: ['OBJECTID', 'SITE_ADDRESS', 'PIN_NUM', 'OWNER'], objectIds: [(result.results[0] as any).graphic.getObjectId()], returnGeometry: true}).then(featureSet => {
                    updateGraphics(featureSet.features[0], view, form);
                });
              }                
            }
          });
        });
    }
  }
  const addSearchWidget = (view: MapView, form: FeatureForm) => {
    const search = new Search({view: view, includeDefaultSources: true, popupEnabled: false, resultGraphicEnabled: false});
    search.when(() => {
        search.sources.add(search.allSources.getItemAt(0));
        search.includeDefaultSources = false;
    });
    view.ui.add(search, 'top-left');
    search.on('search-complete', result => {
      if (result.numResults > 0) {
        if (result.results[0].results.length && featureForm.current) {
          updateGraphics(result.results[0].results[0].feature, view, form);
        }
      }
    });
  }


  const updateGraphics = (selected: Graphic, view: MapView, form: FeatureForm) => {
    const layer = view.map.findLayerById('submit-area') as GraphicsLayer;
    const index = features.current.findIndex(feature => {
      return feature.getObjectId() === selected.getObjectId();
    });
    let distance = 0;
    if (area.current) {
      distance = geometryEngine.distance(selected.geometry, area.current?.geometry, 'feet');
    }
    if (index >= 0) {
      features.current.removeAt(index);
    } else {
      if (distance <= 100) {
        features.current.add(selected);
      } else {
        setShowAlert(true);
      }
    }
    const geometries = features.current.map(feature => {
      return feature.geometry;
    })
    view.graphics.removeAll();
    if (geometries.length) {
      area.current = new Graphic({geometry:geometryEngine.union(geometries.toArray()),symbol: new SimpleFillSymbol({
        color: [255, 255, 0, 0.20],
        outline: {
          color: 'yellow',
          width: 3
        }
      })});
      layer.removeAll();
      layer.add(area.current);
      form.feature.geometry = area.current.geometry;
      debugger
      form.viewModel.notifyFeatureGeometryChanged();
    } else {
      area.current = undefined;
    }
    //refresh calcite list
    setList([...[], ...features.current.toArray()]);
  }
  return (
    <div className="App">
      <div id="header" slot="header">
        <img id='logo' src='https://raleighnc.gov/themes/custom/cityofraleigh/logo.svg' alt='logo'/>
        <h2>Due Diligence Service Request Form</h2>
      </div>
      <div ref={formDiv}></div>
      <div ref={propertyDiv}>
        <h3 className='esri-widget__heading esri-feature-form__group-label'>Property Information</h3>
        <br/>
        <CalciteNotice open closable>
            <div slot="message">Search for an address on the map or click on a property on the map to select.  To remove a property, click on the map or the trash icon in the list below the map.</div>
        </CalciteNotice>        
        <br/>
        <div ref={mapDiv}></div>
        <div>
        <CalciteList>
          {list.map(feature => {
            return (<CalciteListItem key={feature.getObjectId()} 
            label={feature.getAttribute('SITE_ADDRESS')} 
            description={feature.getAttribute('OWNER')}
            onMouseEnter={(e) => {
              feature.symbol = new SimpleFillSymbol({
                outline: {
                  color: 'red',
                  width: 3
                }, style: 'none'
              });
              if (mapView.current) {
                const layer = mapView.current.map.findLayerById('hover-graphics') as GraphicsLayer;
                layer?.removeAll();
                layer.add(feature);
              }
            }}
            onMouseLeave={(e) => {
              if (mapView.current) {
                const layer = mapView.current.map.findLayerById('hover-graphics') as GraphicsLayer;
                layer?.removeAll();
              }
            }}          
            >
              <CalciteAction slot="actions-end" icon="trash" text={''} onClick={() => {
                if (mapView.current && featureForm.current) {
                  updateGraphics(feature, mapView.current, featureForm.current);
                }
              }}></CalciteAction>

            </CalciteListItem>);
          })}
        </CalciteList>  
      </div>
      </div>
      <br/>

      <CalciteButton width="full" disabled={submittable ? undefined : true } onClick={()=> {
        if (featureForm.current) {
          if (featureForm.current.feature.geometry.type === 'polygon' && area.current) {
            featureForm.current.feature.geometry = (area.current.geometry as __esri.Polygon).centroid            
          }
          featureForm.current.submit();
        }
      }}>Submit</CalciteButton>
      <CalciteAlert open={showAlert} auto-dismiss auto-dismiss-duration="fast" color="red" label={'alert'}
      onCalciteAlertClose={() => setShowAlert(false)}>
        <div slot="title">Non-Contingous Property Selected</div>
        <div slot="message">We can only accept continguous properties for the due diligence submittal, this property is too far from the other selected properties. Properties can be selected across the street from another, but only if it is less than 100 feet away from the other properties.</div>
      </CalciteAlert>  
      <CalciteScrim loading={loading} hidden={!loading}></CalciteScrim> 
      <CalciteModal open={!agreed} hidden={agreed} disableCloseButton disableOutsideClose disableEscape>
        <div slot="header">Due Diligence Service</div>
        <div slot="content">
        <p>
          The Due Diligence Service (or DDS) is a free, completely web-based application where high-level property information, and potential site development feasibility is conveyed from regulatory City staff to an applicant.
        </p>
        <p>
          Upon completion of review, each applicant will receive an email containing all staff comments as it pertains to the parcel(s) selected with each submission.  Only contiguous properties are allowed to be submitted, and multiple parcels will be reviewed as a combined assemblage.  
        </p>
        <p>
          Important Information to Note:
          </p><ul>
            <li>If a formal development application is submitted after a DDS, and any development details or site information have changed, it is possible that staff comments may also be different from those provided during a DDS.</li>
            <li>Comments generated during the DDS are based solely on the existing zoning of the property.</li>
            <li>This service is offered at no cost to the applicant, and information received should be considered advisory-only.</li>
            <li>Only a limited number of DDS submittals per week are accepted, and are reviewed on a first-come, first-serve basis.  To maintain a reasonable queue of submissions, we ask that you refrain from submitting more than 2 DDS applications per week.</li>
          </ul>
        <p></p>
        <p>
          By clicking “I AGREE”, you are acknowledging the information above and willingly accepting the details related to this service.
        </p>          
        </div>
        <CalciteButton scale="m"  slot="secondary" onClick={() => setAgreed(true)}>I AGREE</CalciteButton>
      </CalciteModal>
    </div>
  );
}
export default App;