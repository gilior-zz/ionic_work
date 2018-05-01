import {Injectable} from "@angular/core";
import {baseApiUrl, IncidentsConsts} from "./app.consts";
import {cbHttpClient} from "./app.classes";
import * as _ from 'lodash';

@Injectable()
export class IncidentsService {


  public apiUrl = baseApiUrl + 'incidents/';
  public incidents;
  public selectedIncident: any = {};
  public selectedCustomers = [];
  public customers;
  public overviewCols;
  public incidentsQueue = undefined; // 'QueuedEvents';
  public request: any = {
    'SortingData': {
      "SortingCriteria": 'UpdateDateTime',
      "SortDirection": 1,
      "LastRecordSortingCriteriaValue": null
    },
    'ScrollingDirection': 1,
    'LastRecordID': null,
    'QueueID': this.incidentsQueue
  };
  public configs;
  public isLoadingIncidents = false;
  public lastIncident: any;

  // TODO: NgRedux<IIncidentsState> ...?
  constructor(
              public http: cbHttpClient
            ) {
  }







  // </editor-fold>

  // <editor-fold desc="Incident Handling">




  getIncidents(incidentRequestBody) {
    let l= {
      'SortingData': {
        "SortingCriteria":'UpdateDateTime',
        "SortDirection": 1,
        "LastRecordSortingCriteriaValue": null
      },
      'LastRecordID': null,
      'QueueID': undefined,
      'ScrollingDirection': 1,
      'FilterData': {
        "Category": [],
        "SubCategory": [],
        "RuleName": [],
        "Severity": [],
        "Customer": [],
        "FreeText":"",
      }
    };
    let incidentAPIRequestBody = _.cloneDeep(l);

    let sortingData = _.get(incidentAPIRequestBody, 'SortingData', {});
    let sortingCriteria = _.get(sortingData, 'SortingCriteria', {});
    let lastLoadedIncident = _.get(incidentAPIRequestBody, 'LastRecordID', 0);
    let queueID = _.get(incidentAPIRequestBody, 'QueueID', this.incidentsQueue);
    if (!queueID) {
      queueID = this.incidentsQueue;
    }
    let filterData = _.get(incidentAPIRequestBody, 'FilterData', {});
    let scrollingDirection = _.get(incidentAPIRequestBody, 'ScrollingDirection', 1);

    this.request.SortingData = sortingData;

    // Sorting Logic
    if (_.isEmpty(sortingData)) {
      sortingData = {
        "SortingCriteria": _.isEmpty(sortingCriteria) ? 'UpdateDateTime' : sortingCriteria,
        "SortDirection": 1,
        "LastRecordSortingCriteriaValue": _.get(lastLoadedIncident, sortingCriteria, null)
      };
    } else {
      sortingData["LastRecordSortingCriteriaValue"] = _.get(lastLoadedIncident, sortingCriteria, null)
    }

    // Filters Logic
    let filteredCustomers = [];
    if (_.isEmpty(filterData) && _.isEmpty(this.customers)) {
      filterData = {};
    } else {

      if (_.isEmpty(filterData['Customer'])) {
        _.map(this.customers, customer => {
          if (_.includes(this.selectedCustomers, customer['ID'])) {
            filteredCustomers.push({
              'key': customer['wit_OrganizationName'],
              'value': customer['ID']
            })
          }
        });

        filterData['Customer'] = filteredCustomers;
      }
    }

    // Build the final request
    let body = {
      "QueueID": queueID,
      "FilterData": filterData,
      "SortingData": sortingData,
      "LastRecordID": _.get(lastLoadedIncident, 'DUID', 0),
      'ScrollingDirection': scrollingDirection,
      'PageSize': incidentRequestBody.PageSize ? incidentRequestBody.PageSize : IncidentsConsts.INCIDENTS_DEFAULT_PAGE_SIZE
    };

    // return this.http.post(this.apiUrl + 'data', body);
    return this.http.doHttpRequest({method: "POST", url: this.apiUrl + 'data', body: body});
  }

  getCurrentIncidentsQueueCount() {

    let overviewCols = this.overviewCols;

    if (_.isEmpty(overviewCols)) {
      return 0;
    }

    // Filter the current selected customers
    let filteredCustomers = [];

    if (_.isEmpty(this.selectedCustomers)) {
      filteredCustomers = _.map(Object.keys(overviewCols), customerID => parseInt(customerID, 10));
    } else {
      filteredCustomers = _.map(_.filter(Object.keys(overviewCols), customerID => _.includes(this.selectedCustomers, parseInt(customerID, 10))), customerID => parseInt(customerID, 10));

    }

    let incidentQueue = this.incidentsQueue ? this.incidentsQueue : overviewCols[filteredCustomers[0]][0] ? overviewCols[filteredCustomers[0]][0]['QueueID'] : '';

    let totalCount = 0;
    _.map(filteredCustomers, customerID => {
      totalCount += _.get(_.find(overviewCols[customerID], {QueueID: incidentQueue}), 'Value', 0);
    });

    return totalCount;
  }



  // </editor-fold>





  getUpdatedIncidentsByIds(ids) {
    //  return this.http.post(this.apiUrl + 'updatedIncidentsData', {Incidents: ids});
    return this.http.doHttpRequest({
      method: "POST",
      url: this.apiUrl + 'updatedIncidentsData',
      body: {Incidents: ids}
    });
  }

  getIncidentsQueue() {
    if (this.incidentsQueue === undefined) {
      this.incidentsQueue = 'QueuedIncidents';
    }
    return this.incidentsQueue;
  }

  isIncidentOfCurrentQueue(relatedQueues) {
    let currentQueue = this.getIncidentsQueue();
    let incidentOfCurrentQueue = false;
    relatedQueues.forEach(queue => {
      if (queue === currentQueue) {
        incidentOfCurrentQueue = true;
      }
    });
    return incidentOfCurrentQueue;
  }





  terminateWorkflow(req) {
    // return this.http.put(baseApiUrl + 'tasks/terminate', req);
    return this.http.doHttpRequest({method: "PUT", url: baseApiUrl + 'tasks/terminate', body: req});
  }

  /// Handles incidents that are not in the current state list


  // TODO: epicxify


  public getReqObj(properties, dataUnitID?, dataUnitType?, version?) {
    return {
      DataUnitID: dataUnitID || this.selectedIncident.ID,
      DataUnitType: dataUnitType || this.selectedIncident.Type,
      Version: version || this.selectedIncident.Version,
      properties: _.assign({}, properties)
    }
  }
}
