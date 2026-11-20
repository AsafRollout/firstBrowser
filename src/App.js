import React from 'react';
import logo from './logo.svg';
import EventSource from 'eventsource';
import './App.css';
import Rox from 'rox-browser'
//import * as Rox from '@types/rox-browser'
//import axios from 'axios'

//axios.get('http://localhost')
//const Rox = require( 'rox-browser');
class es {
  constructor() {

  }
  addEventListener() {

  }

  stop() {

  }
}

/*
approve
withdraw
*/
const Flag = Rox.Flag
const roxContainer = {
  numToString: new Rox.RoxString('10'),
  str6: new Rox.RoxString('a'),
  poff99: new Rox.Flag(),
  yaya5: new Rox.Flag(),
  videoChat: new Rox.Flag(),
  blat6: new Rox.Flag(false),
  variant: new Rox.RoxString('vat1', ['var2', 'var3']),
  nothing2: new Rox.RoxString(''),
  sayHel2: new Rox.Flag(false),
  zero3: new Rox.Flag(false),
  zero10: new Rox.Flag(false),
  zero12: new Rox.Flag(true),
  nothing9: new Rox.RoxString('qwe'),
  num912: new Rox.RoxNumber(3.12),
}
/*
// QA configurations - copied from Rox
const API_HOST = 'qa.rollout.io';
const qaConfig = {
  API_HOST: API_HOST,
  CD_API_ENDPOINT: `https://${API_HOST}/device/get_configuration`,
  CD_S3_ENDPOINT: 'https://qa-conf.rollout.io/',
  SS_API_ENDPOINT: `https://${API_HOST}/device/update_state_store/`,
  SS_S3_ENDPOINT: 'https://qa-statestore.rollout.io/',
  CLIENT_DATA_CACHE_KEY: 'client_data',
  ANALYTICS_ENDPOINT: 'https://qaanalytic.rollout.io',
  NOTIFICATIONS_ENDPOINT: 'https://qax-push.rollout.io/sse'
};
*/
const API_HOST = '127.0.0.1:8557';
const localConfig = {
  API_HOST: API_HOST,
  CD_API_ENDPOINT: `http://${API_HOST}/device/get_configuration`,
  CD_S3_ENDPOINT: 'https://development-conf.rollout.io/',
  SS_API_ENDPOINT: `http://${API_HOST}/device/update_state_store/`,
  SS_S3_ENDPOINT: 'https://development-statestore.rollout.io/',
  CLIENT_DATA_CACHE_KEY: 'client_data',
  ANALYTICS_ENDPOINT: 'http://127.0.0.1:8787',
  NOTIFICATIONS_ENDPOINT: 'http://127.0.0.1:8887/sse'
};

const PLATFORM_HOST = '127.0.0.1:8097';
const localPlatform = {
  API_HOST: API_HOST,
  CD_API_ENDPOINT: `https://${PLATFORM_HOST}/device/get_configuration`,
  CD_S3_ENDPOINT: '',
  SS_API_ENDPOINT: `https://${PLATFORM_HOST}/device/update_state_store/`,
  SS_S3_ENDPOINT: '',
  CLIENT_DATA_CACHE_KEY: 'client_data',
  ANALYTICS_ENDPOINT: 'http://127.0.0.1:8787',
  NOTIFICATIONS_ENDPOINT: 'http://127.0.0.1:8887/sse'
};


const QA_API_HOST = 'qax.rollout.io';
const qaConfig = {
  API_HOST: QA_API_HOST,
  CD_API_ENDPOINT: `https://${QA_API_HOST}/device/get_configuration`,
  CD_S3_ENDPOINT: 'https://qa-conf.rollout.io/',
  SS_API_ENDPOINT: `https://${QA_API_HOST}/device/update_state_store/`,
  SS_S3_ENDPOINT: 'https://qa-statestore.rollout.io/',
  CLIENT_DATA_CACHE_KEY: 'client_data',
  ANALYTICS_ENDPOINT: 'https://qaanalytic.rollout.io',
  NOTIFICATIONS_ENDPOINT: 'https://qax-push.rollout.io/sse'
};

const PROD_API_HOST = 'x-api.rollout.io';
const prodConfig = {
  API_HOST: PROD_API_HOST,
  CD_API_ENDPOINT: `https://${PROD_API_HOST}/device/get_configuration`,
  CD_S3_ENDPOINT: 'https://conf.rollout.io/',
  SS_API_ENDPOINT: `https://${PROD_API_HOST}/device/update_state_store/`,
  SS_S3_ENDPOINT: 'https://statestore.rollout.io/',
  CLIENT_DATA_CACHE_KEY: 'client_data',
  ANALYTICS_ENDPOINT: 'https://analytic.rollout.io',
  NOTIFICATIONS_ENDPOINT: 'https://3ab4-77-125-94-87.ngrok-free.app/sse'
};

const TEST_HOST = 'api.test.rollout.io';

const testConfig = {
  API_HOST: TEST_HOST,
  CD_API_ENDPOINT: `https://${TEST_HOST}/device/get_configuration`,
  CD_S3_ENDPOINT: 'https://rox-conf.test.rollout.io/',
  //CD_S3_ENDPOINT: 'https://s3.amazonaws.com/rox-conf.test.rollout.io/v1/',
  SS_API_ENDPOINT: `https://${TEST_HOST}/device/update_state_store/`,
  SS_S3_ENDPOINT: 'https://rox-state.test.rollout.io/',
  CLIENT_DATA_CACHE_KEY: 'client_data',
  ANALYTICS_ENDPOINT: 'https://analytic.test.rollout.io',
  NOTIFICATIONS_ENDPOINT: 'https://push.test.rollout.io/sse'
};

const platformConfig = {
  API_HOST: TEST_HOST,
  CD_API_ENDPOINT: 'https://localhost:8097/device/get_configuration',
  CD_S3_ENDPOINT: 'https://rox-conf.test.rollout.io/',
  SS_API_ENDPOINT: 'https://localhost:8097/device/update_state_store/',
  SS_S3_ENDPOINT: 'https://rox-state.test.rollout.io/',
  CLIENT_DATA_CACHE_KEY: 'client_data',
  ANALYTICS_ENDPOINT: 'http://localhost:8123',
  NOTIFICATIONS_ENDPOINT: 'https://localhost:8106/sse'
};

const platformDevStaging = {
  API_HOST: TEST_HOST,
  CD_API_ENDPOINT: 'https://api-staging.saas-dev.beescloud.com/device/get_configuration',
  CD_S3_ENDPOINT: 'https://rox-conf.saas-dev.beescloud.com/',
  SS_API_ENDPOINT: 'https://api-staging.saas-dev.beescloud.com/device/update_state_store/',
  SS_S3_ENDPOINT: 'https://rox-state.saas-dev.beescloud.com/',
  CLIENT_DATA_CACHE_KEY: 'client_data',
  ANALYTICS_ENDPOINT: 'http://127.0.0.1:8787',
  NOTIFICATIONS_ENDPOINT: 'https://sdk-notification-staging.saas-dev.beescloud.com/sse'
  //'https://localhost:8106/sse'
  //https://sdk-notification-staging.saas-dev.beescloud.com/sse',

};

const platformProd = {
  API_HOST: TEST_HOST,
  CD_API_ENDPOINT: "https://api.cloudbees.io/device/get_configuration",
  CD_S3_ENDPOINT: "https://rox-conf.cloudbees.io/",
  SS_API_ENDPOINT: "https://api.cloudbees.io/device/update_state_store/",
  SS_S3_ENDPOINT: "https://rox-state.cloudbees.io/",
  ANALYTICS_ENDPOINT: "http://127.0.0.1:8787",
  NOTIFICATIONS_ENDPOINT: "https://sdk-notification-service.cloudbees.io/sse",
  CLIENT_DATA_CACHE_KEY: 'client_data',
  //'https://localhost:8106/sse'
  //https://sdk-notification-staging.saas-dev.beescloud.com/sse',
};

const platformPreProd = {
  CD_API_ENDPOINT: "https://api.saas-preprod.beescloud.com/device/get_configuration",
  CD_S3_ENDPOINT: "https://rox-conf.saas-preprod.beescloud.com/",
  SS_API_ENDPOINT: "https://api.saas-preprod.beescloud.com/device/update_state_store/",
  SS_S3_ENDPOINT: "https://rox-state.saas-preprod.beescloud.com/",
  ANALYTICS_ENDPOINT: "https://fm-analytics-preprod.saas-preprod.beescloud.com",
  NOTIFICATIONS_ENDPOINT: "https://sdk-notification.saas-preprod.beescloud.com/sse",
  CLIENT_DATA_CACHE_KEY: 'client_data'
};

const platformQA = {
  API_HOST: TEST_HOST,
  CD_API_ENDPOINT: "https://api.saas-qa.beescloud.com/device/get_configuration",
  CD_S3_ENDPOINT: "https://rox-conf.saas-qa.beescloud.com/",
  SS_API_ENDPOINT: "https://api.saas-qa.beescloud.com/device/update_state_store/",
  SS_S3_ENDPOINT: "https://rox-state.saas-qa.beescloud.com/",
  ANALYTICS_ENDPOINT: "https://fm-analytics-qa.saas-preprod.beescloud.com",
  NOTIFICATIONS_ENDPOINT: "https://sdk-notification-service.saas-qa.beescloud.com/sse",
  CLIENT_DATA_CACHE_KEY: 'client_data',
  //'https://localhost:8106/sse'
  //https://sdk-notification-staging.saas-dev.beescloud.com/sse',
};

const platformVPC = {
  CD_API_ENDPOINT:"https://api.vpc-eng.saas-tools.beescloud.com/device/get_configuration" ,
  CD_S3_ENDPOINT:"https://rox-conf.vpc-eng.saas-tools.beescloud.com/" ,
  SS_API_ENDPOINT:"https://api.vpc-eng.saas-tools.beescloud.com/device/update_state_store/",
  SS_S3_ENDPOINT:"https://rox-conf.vpc-eng.saas-tools.beescloud.com/" ,
  NOTIFICATIONS_ENDPOINT:"https://sdk-notification.vpc-eng.saas-tools.beescloud.com/sse" 
}
const zzz = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
let v = 0
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flagValue: roxContainer.sayHel2.isEnabled().toString() };
  }

  
  render() {
    
    setTimeout(function(){
    //  Rox.fetch()
      v++
      //const name = zzz+v.toString()
      //Rox.dynamicApi.isEnabled(name, false);
      console.log('set');
      const sayHi = roxContainer.sayHel2.isEnabled()

      const z12 = roxContainer.poff99.isEnabled()
      const variant = roxContainer.variant.getValue()
      const num = roxContainer.num912.getValue()
      const numToStr = roxContainer.numToString.getValue()
      const nothing2 = roxContainer.nothing2.getValue()
      console.log('num: ', num)
      console.log('sayH: ', sayHi)
      console.log('variant: ', variant)
      console.log('numToStr: ', numToStr)
      console.log('numToStr: ', numToStr)
      this.setState({ flagValue: sayHi.toString(), variant: variant, z12: z12.toString() });
      //Rox.dynamicApi.value(`ff${v}`, '0.3333')
      // console.log(roxContainer.videoChat.isEnabled());
      // Rox.setCustomNumberProperty("numberProperty", 100)
      }.bind(this), 5000);
    // console.log(roxContainer.videoChat.isEnabled());
 
    return <div>
      Flag value = {this.state.flagValue.toString()} Dynamic Value =  {'abc'/*Rox.dynamicApi.isEnabled('dynamicTest', false).toString()*/}
      variant value = {this.state.variant}
      <div><b>flagA:{123/*Rox.dynamicApi.value('flagA', 'nothing')*/}</b></div><div>poff99: {this.state.z12}</div>
    </div>;
  }
}
let a = 19
let roxInitialized = false
function App() {
console.log('a1')
  /*
  Object.keys(namespaceFlags).forEach(namespace => {
    const flagsUnderNamespace = namespaceFlags[namespace]
    Rox.register(namespace, flagsUnderNamespace)
  })*/
  //Rox.setCustomNumberProperty('age', a++)
  //Rox.setCustomStringProperty('name', 'vlabla')
  if (!roxInitialized) {
    roxInitialized = true
    Rox.register(roxContainer);
    //Rox.setCustomNumberProperty("numProp", 216)
    //staging:
    // '71912aa0-8eee-46c7-486d-91de068e8da2', {
    //local:
    // '5e3b3fcf-6d91-4cb5-4d2f-d27e7f96c8bb', {
    Rox.setup('e211fb0e-fc94-4ae6-b63b-c85961855702', { //a87622372329e417f23c081', {//'7577cae9-22f3-421d-8d64-92954945d770', {//67452892e3df6739c64bbc0e', {//f9582010-3b80-4adb-41a6-05b3fcb8c95f', {//'fd005a32-ff52-4cbd-580e-6b178d763029', {//5e3b3fcf-6d91-4cb5-4d2f-d27e7f96c8bb', {//'71912aa0-8eee-46c7-486d-91de068e8da2', { //'2d4adec6-666a-4d72-7534-a7da8c6f0cac', //'9a5472e2-6a38-41cb-5c54-e7ebe8b0c827', { //43a1db6931e0124ac72f271c', { //62f51e7acb0088a3bd4396e3', { //'5ff731c701db89e3ee993414', { //'5f830c7f8f32cbcbb77c3585', {// '5d8cd2eb9ee677413c0e154b', { //5a8012e094d4ca5022765505', { //'5d2e166721fbe34aa4975ea4', {
      //disableNetworkFetch: true,
    //fetchFunction: window.fetch.bind(window),
    //platform: 'Go',
    configurationFetchedHandler: (fetcherResults) => {
      console.log('**', fetcherResults, new Date(), fetcherResults.hasChanges, fetcherResults.fetcherStatus, '**');
      console.log('**', roxContainer.str6.getValue(), '**')
    },
    //roxy: 'http://localhost:3333',
    //freeze: Rox.RoxFlagFreezeLevel.untilLaunch,
    //platform: 'bbb',
    //disablePushUpdateListener: true,
    //freeze: 'none',
    //debugLevel: 'verbose',
    //analytics: {enable: false},
    /*
    proxy: {
      protocol: 'http',
      host: 'localhost:7777'
    },*/
    distinctId: 'mmmeeee',
    //disableSignatureVerification: true,
    eventSourceImpl: EventSource//,
    //devModeSecret: '',
    //configuration: platformQA//, //prodConfig//, //platformPreProd //testConfig, //platformDevStaging,//platformConfig, //
    //devModeSecret: '6c5ec2efe5cd93f1e825a8b0'//'6157243213ca59ab24eaf320' //ce319f2e-b727-416e-b990-3f99a060ffbb' //'d0c23893-6e1e-40ea-aa82-2ff1b4023fdc'//'28c5de59-2f7b-4d98-a5a0-1d69b343e22a' //'5c87c157143b3878b7ddb42a'//'5e09a64f-46e1-4eb7-b683-b4b72848d712'//f53346c6e2228e34e512f3b7'//'d50aedce56e396fc420b60f3' //'1f42b5e77d262183119ad71a' // 'b24a99ad63cc303330958078' //1c3660e43bc5e4a982f9c8d2' //'88425afc596ff2f57c935213'//'804a5fef3fffea9cf84d4bd0' //'0eb8991e09cce50c9d1b446a'//'f53a3c87005d5493dfd8edcc'
  });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Edit <code>src/App.js</code> and save to reload.
          <Welcome />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div onClick={() => Rox.showOverrides()}>overrides</div>~
      </header>
    </div>
  );
}
/*
async function initRollout() {
  const options = {};
  // Register the flags with Rollout
  Rox.register('', flags);
  // Setup the Rollout key
  await Rox.setup('5fe227cbc49b58949b0d59e1', options);
  // Boolean flag example
  if (flags.enableTutorial.isEnabled()) {
    console.log('enableTutorial flag is true');
    // TODO:  Put your code here that needs to be gated
  }
  // Rox flag example
  console.log('Title color is ' + flags.titleColors.getValue());
  // RoxNumber flag example
  console.log('Title size is ' + flags.titleSize.getValue());
}

initRollout().then(function () {
  console.log('Done loading Rollout');
});*/

export default App;

const namespaceFlags = {
  pipeline: {
    showPlatformSettings: new Flag(false),
    enableDragAndDrop: new Flag(false),
    enableActionCatalog: new Flag(false),
    enableAutomationsVisual: new Flag(false),
    showFeatureManagement: new Flag(false),
    showRunDetails: new Flag(false),
    showComponentsSummary: new Flag(true),
    enablePullRequestTrigger: new Flag(false),
    componentsToSummaryNavigation: new Flag(false),
  },

  layout: {
    useNewLayoutSidebarAndNavigationDesign: new Flag(false),
    subOrgsLayout: new Flag(false),
    topNavLayout: new Flag(false),
  },

  platform: {
    connectors: new Flag(false),
    analytics: new Flag(false),
    showGithubAccessTokenConnector: new Flag(false),
    orgVersioning: new Flag(false),
    customCatalogEditorFields: new Flag(false),
    showUsageOverview: new Flag(false),
    showPublishButtons: new Flag(false),
    showUnavailableSaaSFeatures: new Flag(false),
    restrictedFreePlan: new Flag(false),
    showCIInsights: new Flag(false),
    showDynamicDuration: new Flag(false),
    ciTools: new Flag(false),
    ciToolsPublic: new Flag(false),
    stripeNewManagePaymentMethod: new Flag(false),
  },

  exp: {
    sampleExtensions: new Flag(false),
  },

  runDetails: {
    enableShowAllSteps: new Flag(false),
  },

  featureManagement: {
    enableScheduled: new Flag(false),
  },

  myAccount: {
    useRbacServiceCallForOrganizationsTable: new Flag(false),
    showCreateOrg: new Flag(false),
    showLeaveOrg: new Flag(false),
  },

  branches: {
    ghostBuildsToggle: new Flag(false),
  },

  tableUI: {
    components: new Flag(false),
  },

  config: {
    environments: new Flag(false),
    containers: new Flag(false),
    actions: new Flag(false),
    notifications: new Flag(false),
    connectorsProjectManagement: new Flag(false),
  },
}
/*
import React from 'react';
import logo from './logo.svg';
import './App.css';
// Import Rollout SDK
import Rox from 'rox-browser';
// Create a Roxflag in the flags container class

const flags = {
  enableTutorial: new Rox.Flag(),
  titleColors: new Rox.RoxString('White', [
    'White',
    'Blue',
    'Green',
    'Yellow',
    'Brown',
    'Teal',
    'Red',
    'Orange',
    'Purple',
    'Black',
    'Grey',
  ]),
  titleSize: new Rox.RoxNumber(12, [14, 18, 24]),
};
async function initRollout() {
  const options = {};
  // Register the flags with Rollout
  Rox.register('', flags);
  // Setup the Rollout key
  await Rox.setup('e211fb0e-fc94-4ae6-b63b-c85961855702', options); //5fe227cbc49b58949b0d59e1', options);
  // Boolean flag example
  if (flags.enableTutorial.isEnabled()) {
    console.log('enableTutorial flag is true');
    // TODO:  Put your code here that needs to be gated
  }
  // RoxString flag example
  console.log('Title color is ' + flags.titleColors.getValue());
  // RoxNumber flag example
  console.log('Title size is ' + flags.titleSize.getValue());
}
initRollout().then(function () {
  console.log('Done loading Rollout');
});
function App() {
  return (
    <div className='App'>
	Main Div
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p style={{ color: flags.titleColors.getValue() }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React55
        </a>
	<b>f1:{Rox.dynamicApi.value('f1', false)}</b>
        <p>{Rox.dynamicApi.isEnabled('greeting', false) && 'Hello there!'}</p>
      </header>
    </div>
  );
}
export default App;
*/
