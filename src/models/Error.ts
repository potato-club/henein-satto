/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  ErrorUsingDeleteData,
  ErrorUsingGetData,
  ErrorUsingHeadData,
  ErrorUsingOptionsData,
  ErrorUsingPatchData,
  ErrorUsingPostData,
  ErrorUsingPutData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Error<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags basic-error-controller
   * @name ErrorUsingGet
   * @summary error
   * @request GET:/error
   * @response `200` `ErrorUsingGetData` OK
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  errorUsingGet = (params: RequestParams = {}) =>
    this.request<ErrorUsingGetData, void>({
      path: `/error`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags basic-error-controller
   * @name ErrorUsingHead
   * @summary error
   * @request HEAD:/error
   * @response `200` `ErrorUsingHeadData` OK
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  errorUsingHead = (params: RequestParams = {}) =>
    this.request<ErrorUsingHeadData, void>({
      path: `/error`,
      method: "HEAD",
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags basic-error-controller
   * @name ErrorUsingPost
   * @summary error
   * @request POST:/error
   * @response `200` `ErrorUsingPostData` OK
   * @response `201` `void` Created
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  errorUsingPost = (params: RequestParams = {}) =>
    this.request<ErrorUsingPostData, void>({
      path: `/error`,
      method: "POST",
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags basic-error-controller
   * @name ErrorUsingPut
   * @summary error
   * @request PUT:/error
   * @response `200` `ErrorUsingPutData` OK
   * @response `201` `void` Created
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  errorUsingPut = (params: RequestParams = {}) =>
    this.request<ErrorUsingPutData, void>({
      path: `/error`,
      method: "PUT",
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags basic-error-controller
   * @name ErrorUsingDelete
   * @summary error
   * @request DELETE:/error
   * @response `200` `ErrorUsingDeleteData` OK
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  errorUsingDelete = (params: RequestParams = {}) =>
    this.request<ErrorUsingDeleteData, void>({
      path: `/error`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags basic-error-controller
   * @name ErrorUsingOptions
   * @summary error
   * @request OPTIONS:/error
   * @response `200` `ErrorUsingOptionsData` OK
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  errorUsingOptions = (params: RequestParams = {}) =>
    this.request<ErrorUsingOptionsData, void>({
      path: `/error`,
      method: "OPTIONS",
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags basic-error-controller
   * @name ErrorUsingPatch
   * @summary error
   * @request PATCH:/error
   * @response `200` `ErrorUsingPatchData` OK
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  errorUsingPatch = (params: RequestParams = {}) =>
    this.request<ErrorUsingPatchData, void>({
      path: `/error`,
      method: "PATCH",
      type: ContentType.Json,
      ...params,
    });
}
