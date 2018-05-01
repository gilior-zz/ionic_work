import * as _ from 'lodash';
import {HttpParams} from "@angular/common/http";


export module GenericConsts {
    export const DATA_CHANGED = 'dataChanged';
    export const DEFAULT_DATETIME_FORMAT = 'short';
}

export const baseApiUrl = 'CyberCaseApi/v1/';
export const logApiUrl = baseApiUrl + 'log/';

export const DEFAULT_INCIDENTS_FILTER = 'QueuedEvents';

export module IncidentsConsts {
    export const DEFAULT_INCIDENTS_SORTING_CRITERIA = 'UpdateDateTime';
    export const ADD_INCIDENT = 'ADD_INCIDENT';
    export const INSERT_INCIDENT = 'INSERT_INCIDENT';
    export const REMOVE_INCIDENT = 'REMOVE_INCIDENT';
    export const SELECTED_INCIDENT = 'SELECTED_INCIDENT';
    export const INIT_INCIDENTS = 'INIT_INCIDENTS';
    export const UPDATE_INCIDENT = 'UPDATE_INCIDENT';
    export const INIT_SIMILAR_INCIDENTS = 'INIT_SIMILAR_INCIDENTS';
    export const LOADING_INCIDENTS = 'LOADING_INCIDENTS';
    export const INIT_INCIDENT_ALERTS = 'INIT_INCIDENT_ALERTS';
    export const ADD_ALERT_INCIDENT = 'ADD_ALERT_INCIDENT';
    export const RESET_LEADING_ALERT = 'RESET_LEADING_ALERT';
    export const REMOVE_ALERT_INCIDENT = 'REMOVE_ALERT_INCIDENT';
    export const UPDATE_INCIDENT_ALERT = "UPDATE_INCIDENT_ALERT";
    export const GET_INCIDENT_ALERTS = "GET_INCIDENT_ALERTS";
    export const INIT_INCIDENT_LOG = 'INIT_INCIDENT_LOG';
    export const INIT_INCIDENT_LOG_DATA = 'INIT_INCIDENT_LOG_DATA';
    export const UPDATE_REQUEST_STATUS = 'UPDATE_REQUEST_STATUS';
    export const UPDATE_INCIDENT_IN_LIST = 'UPDATE_INCIDENT_IN_LIST';
    export const INIT_INCIDENT_PROGRESS = 'INIT_INCIDENT_PROGRESS';
    export const UPDATE_LOG = 'UPDATE_LOG';
    export const ADD_LOG = "ADD_LOG";
    export const AUTO_SELECT_INCIDENT = 'AUTO_SELECT_INCIDENT';
    export const DOCUMENTATION_RICHTEXT_FIELD = 'wit_Comment.RichTextContent';
    export const SET_UPDATED_FIELD_STATUS = 'SET_UPDATED_FIELD_STATUS';
    export const UPDATE_SELECTED_SEVERITY = 'UPDATE_SELECTED_SEVERITY';
    export const UPDATE_SELECTED_STATUS = 'UPDATE_SELECTED_STATUS';
    export const UPDATE_SELECTED_FIELD = 'UPDATE_SELECTED_FIELD';
    export const CREATE_NEW_INCIDENT = 'CREATE_NEW_INCIDENT';
    export const ADD_LOG_ACTION = 'ADD_LOG_ACTION';
    export const ADD_ATTACHMENT_ACTION = 'ADD_ATTACHMENT_ACTION';
    export const INIT_ATTACHMENTS = 'INIT_ATTACHMENTS';
    export const ADD_ATTACHMENT = 'ADD_ATTACHMENT';
    export const UPDATE_ATTACHMENT = 'UPDATE_ATTACHMENT';
    export const UPDATE_LOG_ACTION = 'UPDATE_LOG_ACTION';
    export const UPDATE_INCIDENTS_LIST = 'UPDATE_INCIDENTS_LIST';
    export const LOAD_MORE_INCIDENTS = 'LOAD_MORE_INCIDENTS';
    export const INIT_WORKFLOW_STAUTS = 'INIT_WORKFLOW_STAUTS';
    export const REMOVE_ATTACHMENT = 'REMOVE_ATTACHMENT';
    export const LOAD_DOC_ATTACHMENTS = 'LOAD_DOC_ATTACHMENTS';
    export const GET_ATTACHMENT_ITEM = 'GET_ATTACHMENT_ITEM';
    export const ASSIGN_USER = 'ASSIGN_USER';
    export const INIT_ENRICHMENT_POPUP = 'INIT_ENRICHMENT_POPUP';
    export const ADD_INCIDENTS_FILTER = 'ADD_INCIDENTS_FILTER';
    export const REMOVE_INCIDENTS_FILTER = 'REMOVE_INCIDENTS_FILTER';
    export const LOAD_FILTERED_INCIDENTS = 'LOAD_FILTERED_INCIDENTS';
    export const ARRANGE_INCIDENTS_BY_QUEUE = 'ARRANGE_INCIDENTS_BY_QUEUE';
    export const GET_INCIDENTS = 'GET_INCIDENTS';
    export const UPDATE_OVERVIEW = 'UPDATE_OVERVIEW';
    export const DISABLE_INCIDENT = 'DISABLE_INCIDENT';
    export const LOAD_WORKFLOW_TASKS = 'LOAD_WORKFLOW_TASKS';
    export const INCIDENT_WORKFLOW_TASKS = 'INCIDENT_WORKFLOW_TASKS';
    export const INIT_INCIDENTS_API_REQUEST = 'INIT_INCIDENTS_API_REQUEST';
    export const UPDATE_INCIDENTS_API_REQUEST = 'UPDATE_INCIDENTS_API_REQUEST';
    export const RESET_INCIDENTS_API_REQUEST = 'RESET_INCIDENTS_API_REQUEST';
    export const GET_UPDATED_INCIDENTS = 'GET_UPDATED_INCIDENTS';
    export const SET_SELECTED_INCIDENT_TEMPLATE = 'SET_SELECTED_INCIDENT_TEMPLATE';
    export const LOAD_EMAIL_DATA = 'LOAD_EMAIL_DATA';
    export const INIT_EMAIL_DATA = 'INIT_EMAIL_DATA';
    export const SET_EMAIL_DATA = 'SET_EMAIL_DATA';
    export const UPDATE_INCIDENTS = 'UPDATE_INCIDENTS';
    export const GET_INCIDENTS_BY_IDS = 'GET_INCIDENTS_BY_IDS';
    export const REMOVE_INCIDENT_BY_ID = 'REMOVE_INCIDENT_BY_ID';
    export const SOCKET_ALERTS_OF_INCIDENT = 'alert_of_incident';
    export const INIT_INCIDENTS_NOT_IN_LIST = 'INIT_INCIDENTS_NOT_IN_LIST';
    export const INCIDENTS_DEFAULT_PAGE_SIZE = 90;
    export const MORE_INCIDENTS_PAGE_SIZE = 30;
    export const DEFAULT_SCROLLING_DIRECTION_RECORD_ID = 0;
}

export module AlertsConsts {
    export const LOAD_ALERTS = 'LOAD_ALERTS';
    export const ALERT_DETAILS = 'ALERT_DETAILS';
    export const ADD_ALERT = 'ADD_ALERT';
    export const INIT_ALERTS = 'INIT_ALERTS';
    export const DELETE_ALERT = 'DELETE_ALERT';
    export const DELETE_ALERTS = 'DELETE_ALERTS';
    export const UPDATE_ALERT = 'UPDATE_ALERT';
    export const UPDATE_ALERTS_LIST = 'UPDATE_ALERTS_LIST';
    export const RESET_SELECTED = 'RESET_SELECTED';
    export const ALERT_FILTER_BY = 'ALERT_FILTER_BY';
    export const UPDATE_ALERT_DETAILS = "UPDATE_ALERT_DETAILS";
    export const LOAD_MORE_ALERTS = 'LOAD_MORE_ALERTS';
    export const INIT_ALERT_ATTACHMENTS = 'INIT_ALERT_ATTACHMENTS';
    export const LOAD_ALERT_ATTACHMENTS = 'LOAD_ALERT_ATTACHMENTS';
    export const REMOVE_ALERT_ATTACHMENT = 'REMOVE_ALERT_ATTACHMENT';
    export const ADD_ALERT_ATTACHMENT = 'ADD_ALERT_ATTACHMENT';
    export const ADD_ALERT_ATTACHMENT_ACTION = 'ADD_ALERT_ATTACHMENT_ACTION';
    export const UPDATE_ALERT_DETAILS_FIELD = 'UPDATE_ALERT_DETAILS_FIELD';
    export const UPDATE_ALERT_DOCUMENT = 'UPDATE_ALERT_DOCUMENT';
    export const RESET_LEADING_ALERT = 'RESET_LEADING_ALERT';
    export const ADD_ALERTS_FILTER = 'ADD_ALERTS_FILTER';
    export const REMOVE_ALERTS_FILTER = 'REMOVE_ALERTS_FILTER';
    export const LOAD_FILTERED_ALERTS = 'LOAD_FILTERED_ALERTS';
    export const INIT_ALERTS_API_REQUEST = 'INIT_ALERTS_API_REQUEST';
    export const RESET_ALERTS_API_REQUEST = 'RESET_ALERTS_API_REQUEST';
    export const UPDATE_ALERTS_API_REQUEST = 'UPDATE_ALERTS_API_REQUEST';
    export const CHANGE_ALERT_STATUS = 'CHANGE_ALERT_STATUS';
    export const CHANGE_ASSIGNED_ALERT_STATUS = 'CHANGE_ASSIGNED_ALERT_STATUS';
    export const INIT_ALERTS_NOT_IN_LIST = 'INIT_ALERTS_NOT_IN_LIST';
    export const UPDATE_ALERT_OVERVIEW = 'UPDATE_ALERT_OVERVIEW';
    export const GET_ALERTS_BY_IDS = 'GET_ALERTS_BY_IDS';
    export const UPDATE_ALERTS = 'UPDATE_ALERTS';
    export const UPDATE_ALERT_REFRESH = 'UPDATE_ALERT_REFRESH';
    export const DEFAULT_SORTING_DIRECTION = 1;
    export const ALERTS_SCROLL_DIRECTION_DOWN = 1;
    export const ALERTS_DEFAULT_PAGE_SIZE = 90;
}

export module AuthConsts {
    export const SET_USER = 'SET_USER';
    export const TOKEN_STORAGE_NAME = 'jwt-token';
    export const SHIFT_STORAGE_NAME = 'ShiftObject';
    export const APPROVED_AUTH = "APPROVED_AUTH";
    export const STORE_URL = "STORE_URL";
    export const APPROVED_REQUEST = "APPROVED_REQUEST";
    export const SHIFT_DETAILS = "SHIFT_DETAILS";
    export const SECURITY_CHANGE = "SECURITY_CHANGE";
}

export module VirtualScrollConst {
    export const SCROLL_TOP = 'SCROLL_TOP';
}

export module UIConsts {
    export const UI_UPDATE = 'UI_UPDATE';
    export const TOGGLE_UI_STATE = 'TOGGLE_UI_STATE';
    export const SCROLL_AMOUNT = 150; // px
}

export module OverviewbarConsts {
    export const INIT_COLS = 'INIT_COLS';
    export const INIT_ALERT_COLS = 'INIT_ALERT_COLS';
    export const INCIDENTS_SEVERITY = "INCIDENTS_SEVERITY";
}

export module RecordTypesConsts {
    export const INCIDENT = 'EEvent';
    export const ALERT = 'EIncident';
}

export module DataUnitTypesConsts {
    export const INCIDENT_DETAILS = 'DUEventDetails';
    export const ALERT_DETAILS = 'DUIncident';
}

export module ConfigsConsts {
    export const SET_CONFIG = 'SET_CONFIG';
    export const UPDATE_CONFIG = 'UPDATE_CONFIG';
    export const SOCKET_UPDATE_CONFIG = 'SOCKET_UPDATE_CONFIG';
    export const EVENT_STATUSES = 'Dictionaries.Event_Status';
    export const ALERT_STATUSES = 'Dictionaries.Incident_Status';
    export const ORIGIN = 'Dictionaries.Origin';
    export const CATEGORIES_HIERARCHY = 'CategoriesHierarchy';

    // UI Settings
    export const UI_SETTINGS = 'DataUnitsUISettings';
    export const UI_SETTINGS_ALERT_DETAILS = UI_SETTINGS + '.' + RecordTypesConsts.ALERT + '.' + DataUnitTypesConsts.ALERT_DETAILS;
    export const UI_SETTINGS_INCIDENT_DETAILS = UI_SETTINGS + '.' + RecordTypesConsts.INCIDENT + '.' + DataUnitTypesConsts.INCIDENT_DETAILS;
    export const UI_SETTINGS_FIELD_HEADERS = "FieldHeaders";

    // Metadata
    export const METADATA = 'DataUnitsMetadata';
    export const METADATA_INCIDENT_DETAILS = METADATA + '.' + RecordTypesConsts.INCIDENT + '.' + DataUnitTypesConsts.INCIDENT_DETAILS;
    export const METADATA_FIELDS = "Fields";
}

export module AlertStatusConsts {
    export const CLOSED = "Closed";
    export const CLOSED_FALSE = "Closed False";
    export const QUEUED = "Queued";
    export const OPEN = "Open"; // will be a replacement for queued
}

export module EchoConsts {
    export const IFRAME_PARAMS = 'IFRAME_PARAMS';
    export const ECHO_API = "{0}://{1}/api/router/v1";
    export const FINISH_SHIFT = "/redirect?id=end_of_shift&shift_name={0}&shift_date={1}&redirect";
    export const ECHO_INCIDENT = "/redirect?param1={0}&param2={1}&param3={2}&param4={3}&entityType=Incident&entityId={4}&sourceAddress={5}&sourceHostName={6}&sourceUserName={7}&DestinationAddress={8}&DestinationHostName={9}&DestinationUserName={10}&redirect";
    export const SEARCH_QUERY = "/redirect?id=basic-search&query={0}&redirect";
    export const SEARCH_TAB_QUERY = "/redirect?id=search&redirect";
}

export module WorkflowConsts {
    export const INIT_WORKFLOW = 'INIT_WORKFLOW';
    export const INIT_ACTIVITI_TASKS = 'INIT_ACTIVITI_TASKS';
    export const VAR_EXPR = /\${(.*?)}/;
    export const SET_WORKFLOW_LOADING_STATUS = 'SET_WORKFLOW_LOADING_STATUS';
    export const TERMINATE_WORKFLOW = 'TERMINATE_WORKFLOW';
}

export module DetailsConsts {
    export const SET_UPDATED_FIELD_STATUS = "SET_UPDATED_FIELD_STATUS";
}

export const Keycode = {
    DOWN: 40,
    UP: 38,
    ENTER: 13
};

export const SeverityRange = {
    MIN: 1,
    MAX: 10
};

export module SaveStatus {
    export const FAILED = "FAILED";
    export const CANCELED = "CANCELED";
    export const SUCCESS = "SUCCESS";
    export const PENDING = "PENDING";
}

export module ResponseToolsConsts {
    export const INIT_RESPONSE_TOOLS = 'INIT_RESPONSE_TOOLS';
    export const SET_RUN_TOOL_STATUS = 'SET_RUN_TOOL_STATUS';
    export const SET_RESPONSE_TOOLS_PARAMS = 'SET_RESPONSE_TOOLS_PARAMS';
    export const SET_RESPONSE_TOOLS_USER_COMMENT = 'SET_RESPONSE_TOOLS_USER_COMMENT';
}

export module BulletinConsts {
    export const INIT_MESSAGES = 'INIT_MESSAGES';
    export const LOAD_MESSAGES = 'LOAD_MESSAGES';
    export const LOAD_PUBLISHED_BY_ME_MESSAGES = 'LOAD_PUBLISHED_BY_ME_MESSAGES';
    export const MARK_AS_READ = 'MARK_AS_READ';
    export const MARK_AS_OBSOLETE = 'MARK_AS_OBSOLETE';
    export const CREATE_NEW_BULLETIN = 'CREATE_NEW_BULLETIN';
}

export module BulletinFields {
    export const wit_Title = 'wit_Title';
    export const wit_BulletinContent = 'wit_BulletinContent';
    export const wit_Addressees = 'wit_Addressees';
    export const wit_ExpirationDate = 'wit_ExpirationDate';
    export const wit_MustRead = 'wit_MustRead';
    export const wit_Label = 'wit_Label';
    export const wit_Obsolete = 'wit_Obsolete';
}

export module AdminGeneralConsts {
    export const LOAD_ADMIN_COMPONENT_LIST = 'LOAD_ADMIN_COMPONENT_LIST';
}

export module AdminCustomersConsts {
    export const LOAD_ADMIN_CUSTOMERS = 'LOAD_ADMIN_CUSTOMERS';
    export const INIT_ADMIN_CUSTOMERS = 'INIT_ADMIN_CUSTOMERS';
    export const LOAD_ADMIN_CUSTOMER = 'LOAD_ADMIN_CUSTOMER';
    export const INIT_ADMIN_CUSTOMER = 'INIT_ADMIN_CUSTOMER';
    export const RESET_ADMIN_CUSTOMER = 'RESET_ADMIN_CUSTOMER';
    export const START_CUSTOMER_EDIT = 'START_CUSTOMER_EDIT';
    export const CUSTOMER_EDITED = 'CUSTOMER_EDITED';
    export const START_ADDING_CUSTOMER = 'START_ADDING_CUSTOMER';
    export const CUSTOMER_ADDED = 'CUSTOMER_ADDED';
}

export module AdminUsersConsts {
    export const LOAD_ADMIN_USERS = 'LOAD_ADMIN_USERS';
    export const INIT_ADMIN_USERS = 'INIT_ADMIN_USERS';
    export const LOAD_ADMIN_USER = 'LOAD_ADMIN_USER';
    export const INIT_ADMIN_USER = 'INIT_ADMIN_USER';
    export const RESET_ADMIN_USER = 'RESET_ADMIN_USER';
    export const SAVE_USER = 'SAVE_USER';
    export const LOAD_ACTIVE_ROLES = 'LOAD_ACTIVE_ROLES';
    export const INIT_ACTIVE_ROLES = 'INIT_ACTIVE_ROLES';
    export const SEARCH_USER = 'SEARCH_USER';
    export const GET_ACTIVE_DIRECTORY_USER = 'GET_ACTIVE_DIRECTORY_USER';
}

export module DynamicComponentLoaderConsts {
    export const LOAD_COMPONENT = 'LOAD_COMPONENT';
    export const DESTROY_COMPONENT = 'DESTROY_COMPONENT';
}

export interface ISeverityLevel {
    name: string;
    levels: number[]
}

export const SeverityLevels: ISeverityLevel[] = [
    {name: 'high', levels: _.range(8, 100)},
    {name: 'moderate', levels: _.range(4, 8)},
    {name: 'low', levels: _.range(0, 4)}
];

export const DocumentType = {
    ATTACHMENT: 'Attachment',
    DOCUMENTATION: 'DUEventDoc'
};

export module WorkflowStatus {
    export const COMPLETED = 30282;
    export const NEW = 30278;
    export const STARTED = 30279;
    export const SUSPENDED = 30280;
    export const DELETED = 30281;
    export const FAILED = 30283;
}

export module WorkflowStatusIndication {
    export const AUTOMATIC_TASK = 30311;
    export const USER_TASK = 30312;
    export const NA = 30313;
}

export module UsersConsts {
    export const INIT_USERS = 'INIT_USERS';
    export const LOAD_USERS = 'LOAD_USERS';
}

export module CustomerConsts {
    export const INIT_CUSTOMERS = 'INIT_CUSTOMERS';
    export const LOAD_CUSTMOERS = 'LOAD_CUSTOMERS';
    export const SELECT_CUSTOMERS = 'SELECT_CUSTOMERS';
    export const SHOW_GLOBAL_CUSTOMERS = 'SHOW_GLOBAL_CUSTOMERS';
    export const SHOW_SEVERAL_CUSTOMERS = 'SHOW_SEVERAL_CUSTOMERS';
    export const SHOW_SINGLE_CUSTOMER = 'SHOW_SINGLE_CUSTOMER';
}

export module RawDataConsts {
    export const GET_INCIDENT_RAW = 'GET_INCIDENT_RAW';
}

export module NavbarConsts {
    export const GET_ABOUT = 'GET_ABOUT';
}

export module ErrorMsgs {
    export const GENERAL_ERROR_RELOAD = 'A general error occurred, please try to reload the page.';
    export const FORBIDDEN_ERROR = "The shift has expired, please reload the page";
    export const NOT_FOUND_ERROR = 'Page/Service not found.';
    export const UNKNOWN_ERROR = 'An unknown error occurred.';
    export const SERVER_DOWN_MSG = 'offline - server is down.';
    export const NO_CONNECTION_MSG = 'offline - connection is down.';
    export const NO_STATUS_ERROR = 'An unexpected error occurred.';
    export const CONFLICT_ERROR = 'There was a conflict in the operation, please try to reload the page.';
    export const NOT_PERMITTED_OPERATION_ERROR = 'Operation is not permitted, please contact system administrator';
}

export module entityFieldName {
    export const CATEGORY = 'Category';
    export const SUB_CATEGORY = 'Sub Category';
    export const RULE_NAME = 'Rule Name';
    export const SEVERITY = 'Severity';
    export const CUSTOMER = 'Customer';
    export const FREE_TEXT = 'FreeText';
}

export module entityFieldColor {
    export const CATEGORY = '#00c2d6';
    export const SUB_CATEGORY = '#fea21f';
    export const RULE_NAME = '#4683ff';
    export const SEVERITY = '#ea4e4e';
    export const CUSTOMER = '#269326';
    export const FREE_TEXT = '#fffc00';
}

export module enrichmentFieldsConsts {
    export const INIT_ENRICHMENT_FIELDS = 'INIT_ENRICHMENT_FIELDS';
    export const LOAD_ENRICHMENT_FIELDS = 'LOAD_ENRICHMENT_FIELDS';
}

export module OperationPermissions {
    // Viewing
    export const VIEW_INCIDENTS_SCREEN = "View Incidents screen";//?
    export const VIEW_ALERTS_SCREEN = "View Alerts screen";
    export const VIEW_BASE_EVENTS = "View base event";

    // Incidents & Alerts
    export const CLAIM_INCIDENT = "Claim Incident";
    export const CHANGE_INCIDENT_STATUS = "Change Incident status";
    export const CHANGE_INCIDENT_SEVERITY = "Change Incident severity";
    export const MODIFY_INCIDENT = "Modify editable Incident fields";
    export const ADD_ALERT_TO_INCIDENT = "Add Alert to Incident";
    export const REMOVE_ALERT_FROM_INCIDENT = "Remove Alert from Incident";
    export const ADD_DOCUMENTATION = "Add documentation";
    export const CREATE_INCIDENT = "Create Incident";
    export const CHANGE_ALERT_STATUS = "Change Alert status";
    export const EXPORT = "Export";
    export const ASSIGN_INCIDENT = "Assign Incident to User or Role";
    export const DELETE_INCIDENT = "Delete Incident";
    export const CHANGE_LEAD_ALERT = "Change Lead Alert";

    // Workflow
    export const LAUNCH_WORKFLOW = "Launch Workflow Manually";
    export const TERMINATE_WORKFLOW = "Terminate Workflow";
    export const CARRY_OUT_MANUAL_WORKFLOW_TASK = "Carry out manual Workflow Task";

    // Invetiagtion
    export const INVESTIGATE = "Investigate";

    // Response Tool
    export const LAUNCH_RESPONSE_TOOL = "Launch Response Tool";

    // Bulletin
    export const EDIT_BULLETIN_BOARD = "Bulletin Board Editor";
    export const VIEW_BULLETIN_BOARD = "Bulletin Board Viewer";

    // Settings
    export const VIEW_USERS = "View Users Management";
    export const EDIT_USERS = "Edit Users Management";
    export const VIEW_ROLES = "View Roles Management";
    export const EDIT_ROLES = "Edit Roles Management";
    export const VIEW_CUSTOMERS = "View Customers Management";
    export const EDIT_CUSTOMERS = "Edit Customers Management";
    export const VIEW_WF_TOOLS = "View WF/Tools Management";
    export const EDIT_WF_TOOLS = "Edit WF/Tools Management";
    export const EDIT_DICTIOANRIES = "Edit dictionaries";
}

export const CustomerContextOperationPermissions = [
    OperationPermissions.CLAIM_INCIDENT,
    OperationPermissions.CHANGE_INCIDENT_STATUS,
    OperationPermissions.CHANGE_INCIDENT_SEVERITY,
    OperationPermissions.MODIFY_INCIDENT,
    OperationPermissions.ADD_ALERT_TO_INCIDENT,
    OperationPermissions.REMOVE_ALERT_FROM_INCIDENT,
    OperationPermissions.ADD_DOCUMENTATION,
    OperationPermissions.CARRY_OUT_MANUAL_WORKFLOW_TASK,
    OperationPermissions.CHANGE_ALERT_STATUS,
    OperationPermissions.EXPORT,
    OperationPermissions.DELETE_INCIDENT,
    OperationPermissions.ASSIGN_INCIDENT,
    OperationPermissions.LAUNCH_WORKFLOW,
    OperationPermissions.TERMINATE_WORKFLOW,
    OperationPermissions.LAUNCH_RESPONSE_TOOL,
    OperationPermissions.CREATE_INCIDENT
];

export module ContentType {
    export const APPLICATION_ZIP = 'application/zip';
}

export const fileTypeClassName = {
    xlsx: 'fa-file-excel-o',
    xls: 'fa-file-excel-o',
    csv: 'fa-file-excel-o',
    zip: 'fa-file-archive-o',
    rar: 'fa-file-archive-o',
    wav: 'fa-file-audio-o',
    mp3: 'fa-file-audio-o',
    m4a: 'fa-file-audio-o',
    html: 'fa-file-code-o',
    js: 'fa-file-code-o',
    css: 'fa-file-code-o',
    json: 'fa-file-code-o',
    pdf: 'fa-file-pdf-o',
    jpg: 'fa-file-photo-o',
    gif: 'fa-file-photo-o',
    png: 'fa-file-photo-o',
    bmp: 'fa-file-photo-o',
    svg: 'fa-file-photo-o',
    ppt: 'fa-file-powerpoint-o',
    pptx: 'fa-file-powerpoint-o',
    txt: 'fa-file-text-o',
    log: 'fa-file-text-o',
    doc: 'fa-file-word-o',
    docx: 'fa-file-word-o',
    defaultFileType: 'fa-file-o'
};

export module FileConsts {
    export const FILE_INPUT = 'FILE_INPUT';
    export const FILE_UPLOADED = 'FILE_UPLOADED';
    export const RESET_FILE_UPLOAD = 'RESET_FILE_UPLOAD';
    export const MAX_HEIGHT = 350; // px
    export const MAX_WIDTH = 350; // px
}

export module SOCKET_MSGS {
    export const SERVER_DOWN = 'server_is_down';
    export const SERVER_UP = 'server_is_up';
    export const CONNECTED = 'CONNECTED';
}

export const ViewParts = {
    AlertCard: "AlertCard",
    AlertCardAdd: "AlertCardAdd",
    AlertPreview: "AlertPreview",
    IncidentCard: "IncidentCard",
    IncidentCardAdd: "IncidentCardAdd",
    AlertInIncidentCard: "AlertInIncidentCard",
    IncidentPreviewSource: "IncidentPreviewSource",
    IncidentPreviewDest: "IncidentPreviewDest",
};

export module RolesConsts {
    export const RESET_ROLE = 'RESET_ROLE';
    export const INIT_ROLE = 'INIT_ROLE';
    export const GET_ROLE = 'GET_ROLE';
    export const INIT_ROLES = 'INIT_ROLES';
    export const GET_ROLES = 'GET_ROLES';
    export const INIT_ROLES_OPERATIONS = 'INIT_ROLES_OPERATIONS';
    export const GET_OPERATIONS = 'GET_OPERATIONS';
    export const SAVE_ROLE = 'SAVE_ROLE';
    export const GET_ACTIVE_CUSTOMERS = 'GET_ACTIVE_CUSTOMERS';
    export const INIT_ACTIVE_CUSTOMERS = 'INIT_ACTIVE_CUSTOMERS';
}

export module BasicDataUnitFields {
    export const ID = "ID";
    export const CustomerID = "CustomerID";
}

export module IncidentDetailsFields {
    export const Severity = "wit_NormalizedSeverity";
}

export module OfflineStateSeverity {
    export const ERROR = "error";
    export const WARNING = "warning";
    export const INFO = "info";
}

export enum ElementPosition {
    before, after, inside
}

export type HttpMethodOptions = 'DELETE' | 'GET' | 'HEAD' | 'JSONP' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH';

export type HttpResponseType = 'arraybuffer' | 'blob' | 'json' | 'text';

export interface IRequestOptions {
    method: HttpMethodOptions,
    url: string,
    body?: any,
    params?: HttpParams,
    responseType?: HttpResponseType
}
