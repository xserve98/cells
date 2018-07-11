/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import ActivityObject from './ActivityObject';
import ActivityObjectType from './ActivityObjectType';





/**
* The ActivityObject model module.
* @module model/ActivityObject
* @version 1.0
*/
export default class ActivityObject {
    /**
    * Constructs a new <code>ActivityObject</code>.
    * @alias module:model/ActivityObject
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ActivityObject</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ActivityObject} obj Optional instance to populate.
    * @return {module:model/ActivityObject} The populated <code>ActivityObject</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityObject();

            
            
            

            if (data.hasOwnProperty('jsonLdContext')) {
                obj['jsonLdContext'] = ApiClient.convertToType(data['jsonLdContext'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ActivityObjectType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = ActivityObject.constructFromObject(data['context']);
            }
            if (data.hasOwnProperty('attachment')) {
                obj['attachment'] = ActivityObject.constructFromObject(data['attachment']);
            }
            if (data.hasOwnProperty('attributedTo')) {
                obj['attributedTo'] = ActivityObject.constructFromObject(data['attributedTo']);
            }
            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ActivityObject.constructFromObject(data['audience']);
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ActivityObject.constructFromObject(data['content']);
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Date');
            }
            if (data.hasOwnProperty('published')) {
                obj['published'] = ApiClient.convertToType(data['published'], 'Date');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Date');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ActivityObject.constructFromObject(data['url']);
            }
            if (data.hasOwnProperty('mediaType')) {
                obj['mediaType'] = ApiClient.convertToType(data['mediaType'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ActivityObject.constructFromObject(data['icon']);
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ActivityObject.constructFromObject(data['image']);
            }
            if (data.hasOwnProperty('preview')) {
                obj['preview'] = ActivityObject.constructFromObject(data['preview']);
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ActivityObject.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('inReplyTo')) {
                obj['inReplyTo'] = ActivityObject.constructFromObject(data['inReplyTo']);
            }
            if (data.hasOwnProperty('replies')) {
                obj['replies'] = ActivityObject.constructFromObject(data['replies']);
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ActivityObject.constructFromObject(data['tag']);
            }
            if (data.hasOwnProperty('generator')) {
                obj['generator'] = ActivityObject.constructFromObject(data['generator']);
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ActivityObject.constructFromObject(data['to']);
            }
            if (data.hasOwnProperty('bto')) {
                obj['bto'] = ActivityObject.constructFromObject(data['bto']);
            }
            if (data.hasOwnProperty('cc')) {
                obj['cc'] = ActivityObject.constructFromObject(data['cc']);
            }
            if (data.hasOwnProperty('bcc')) {
                obj['bcc'] = ActivityObject.constructFromObject(data['bcc']);
            }
            if (data.hasOwnProperty('actor')) {
                obj['actor'] = ActivityObject.constructFromObject(data['actor']);
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ActivityObject.constructFromObject(data['object']);
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ActivityObject.constructFromObject(data['target']);
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ActivityObject.constructFromObject(data['result']);
            }
            if (data.hasOwnProperty('origin')) {
                obj['origin'] = ActivityObject.constructFromObject(data['origin']);
            }
            if (data.hasOwnProperty('instrument')) {
                obj['instrument'] = ActivityObject.constructFromObject(data['instrument']);
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('rel')) {
                obj['rel'] = ApiClient.convertToType(data['rel'], 'String');
            }
            if (data.hasOwnProperty('hreflang')) {
                obj['hreflang'] = ApiClient.convertToType(data['hreflang'], 'String');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('oneOf')) {
                obj['oneOf'] = ActivityObject.constructFromObject(data['oneOf']);
            }
            if (data.hasOwnProperty('anyOf')) {
                obj['anyOf'] = ActivityObject.constructFromObject(data['anyOf']);
            }
            if (data.hasOwnProperty('closed')) {
                obj['closed'] = ApiClient.convertToType(data['closed'], 'Date');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ActivityObject.constructFromObject(data['subject']);
            }
            if (data.hasOwnProperty('relationship')) {
                obj['relationship'] = ActivityObject.constructFromObject(data['relationship']);
            }
            if (data.hasOwnProperty('formerType')) {
                obj['formerType'] = ActivityObjectType.constructFromObject(data['formerType']);
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Date');
            }
            if (data.hasOwnProperty('accuracy')) {
                obj['accuracy'] = ApiClient.convertToType(data['accuracy'], 'Number');
            }
            if (data.hasOwnProperty('altitude')) {
                obj['altitude'] = ApiClient.convertToType(data['altitude'], 'Number');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('radius')) {
                obj['radius'] = ApiClient.convertToType(data['radius'], 'Number');
            }
            if (data.hasOwnProperty('units')) {
                obj['units'] = ApiClient.convertToType(data['units'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ActivityObject]);
            }
            if (data.hasOwnProperty('totalItems')) {
                obj['totalItems'] = ApiClient.convertToType(data['totalItems'], 'Number');
            }
            if (data.hasOwnProperty('current')) {
                obj['current'] = ActivityObject.constructFromObject(data['current']);
            }
            if (data.hasOwnProperty('first')) {
                obj['first'] = ActivityObject.constructFromObject(data['first']);
            }
            if (data.hasOwnProperty('last')) {
                obj['last'] = ActivityObject.constructFromObject(data['last']);
            }
            if (data.hasOwnProperty('partOf')) {
                obj['partOf'] = ActivityObject.constructFromObject(data['partOf']);
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ActivityObject.constructFromObject(data['next']);
            }
            if (data.hasOwnProperty('prev')) {
                obj['prev'] = ActivityObject.constructFromObject(data['prev']);
            }
        }
        return obj;
    }

    /**
    * @member {String} jsonLdContext
    */
    jsonLdContext = undefined;
    /**
    * @member {module:model/ActivityObjectType} type
    */
    type = undefined;
    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} summary
    */
    summary = undefined;
    /**
    * @member {module:model/ActivityObject} context
    */
    context = undefined;
    /**
    * @member {module:model/ActivityObject} attachment
    */
    attachment = undefined;
    /**
    * @member {module:model/ActivityObject} attributedTo
    */
    attributedTo = undefined;
    /**
    * @member {module:model/ActivityObject} audience
    */
    audience = undefined;
    /**
    * @member {module:model/ActivityObject} content
    */
    content = undefined;
    /**
    * @member {Date} startTime
    */
    startTime = undefined;
    /**
    * @member {Date} endTime
    */
    endTime = undefined;
    /**
    * @member {Date} published
    */
    published = undefined;
    /**
    * @member {Date} updated
    */
    updated = undefined;
    /**
    * @member {Date} duration
    */
    duration = undefined;
    /**
    * @member {module:model/ActivityObject} url
    */
    url = undefined;
    /**
    * @member {String} mediaType
    */
    mediaType = undefined;
    /**
    * @member {module:model/ActivityObject} icon
    */
    icon = undefined;
    /**
    * @member {module:model/ActivityObject} image
    */
    image = undefined;
    /**
    * @member {module:model/ActivityObject} preview
    */
    preview = undefined;
    /**
    * @member {module:model/ActivityObject} location
    */
    location = undefined;
    /**
    * @member {module:model/ActivityObject} inReplyTo
    */
    inReplyTo = undefined;
    /**
    * @member {module:model/ActivityObject} replies
    */
    replies = undefined;
    /**
    * @member {module:model/ActivityObject} tag
    */
    tag = undefined;
    /**
    * @member {module:model/ActivityObject} generator
    */
    generator = undefined;
    /**
    * @member {module:model/ActivityObject} to
    */
    to = undefined;
    /**
    * @member {module:model/ActivityObject} bto
    */
    bto = undefined;
    /**
    * @member {module:model/ActivityObject} cc
    */
    cc = undefined;
    /**
    * @member {module:model/ActivityObject} bcc
    */
    bcc = undefined;
    /**
    * @member {module:model/ActivityObject} actor
    */
    actor = undefined;
    /**
    * @member {module:model/ActivityObject} object
    */
    object = undefined;
    /**
    * @member {module:model/ActivityObject} target
    */
    target = undefined;
    /**
    * @member {module:model/ActivityObject} result
    */
    result = undefined;
    /**
    * @member {module:model/ActivityObject} origin
    */
    origin = undefined;
    /**
    * @member {module:model/ActivityObject} instrument
    */
    instrument = undefined;
    /**
    * @member {String} href
    */
    href = undefined;
    /**
    * @member {String} rel
    */
    rel = undefined;
    /**
    * @member {String} hreflang
    */
    hreflang = undefined;
    /**
    * @member {Number} height
    */
    height = undefined;
    /**
    * @member {Number} width
    */
    width = undefined;
    /**
    * @member {module:model/ActivityObject} oneOf
    */
    oneOf = undefined;
    /**
    * @member {module:model/ActivityObject} anyOf
    */
    anyOf = undefined;
    /**
    * @member {Date} closed
    */
    closed = undefined;
    /**
    * @member {module:model/ActivityObject} subject
    */
    subject = undefined;
    /**
    * @member {module:model/ActivityObject} relationship
    */
    relationship = undefined;
    /**
    * @member {module:model/ActivityObjectType} formerType
    */
    formerType = undefined;
    /**
    * @member {Date} deleted
    */
    deleted = undefined;
    /**
    * @member {Number} accuracy
    */
    accuracy = undefined;
    /**
    * @member {Number} altitude
    */
    altitude = undefined;
    /**
    * @member {Number} latitude
    */
    latitude = undefined;
    /**
    * @member {Number} longitude
    */
    longitude = undefined;
    /**
    * @member {Number} radius
    */
    radius = undefined;
    /**
    * @member {String} units
    */
    units = undefined;
    /**
    * @member {Array.<module:model/ActivityObject>} items
    */
    items = undefined;
    /**
    * @member {Number} totalItems
    */
    totalItems = undefined;
    /**
    * @member {module:model/ActivityObject} current
    */
    current = undefined;
    /**
    * @member {module:model/ActivityObject} first
    */
    first = undefined;
    /**
    * @member {module:model/ActivityObject} last
    */
    last = undefined;
    /**
    * @member {module:model/ActivityObject} partOf
    */
    partOf = undefined;
    /**
    * @member {module:model/ActivityObject} next
    */
    next = undefined;
    /**
    * @member {module:model/ActivityObject} prev
    */
    prev = undefined;








}


