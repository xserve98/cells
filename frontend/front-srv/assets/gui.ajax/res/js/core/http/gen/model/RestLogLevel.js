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


/**
* Enum class RestLogLevel.
* @enum {}
* @readonly
*/
export default class RestLogLevel {
    
        /**
         * value: "DEBUG"
         * @const
         */
        DEBUG = "DEBUG";

    
        /**
         * value: "INFO"
         * @const
         */
        INFO = "INFO";

    
        /**
         * value: "NOTICE"
         * @const
         */
        NOTICE = "NOTICE";

    
        /**
         * value: "WARNING"
         * @const
         */
        WARNING = "WARNING";

    
        /**
         * value: "ERROR"
         * @const
         */
        ERROR = "ERROR";

    

    /**
    * Returns a <code>RestLogLevel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RestLogLevel} The enum <code>RestLogLevel</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

