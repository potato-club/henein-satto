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
  DeleteCharacterUsingDeleteData,
  RefreshCharacterInfoUsingPostData,
  SearchUserInfoUsingGet1Data,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Character<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags character-controller
   * @name DeleteCharacterUsingDelete
   * @summary deleteCharacter
   * @request DELETE:/character
   * @response `200` `DeleteCharacterUsingDeleteData` OK
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  deleteCharacterUsingDelete = (
    query: {
      /**
       * id
       * @format int64
       */
      id: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteCharacterUsingDeleteData, void>({
      path: `/character`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags character-controller
   * @name RefreshCharacterInfoUsingPost
   * @summary 캐릭터 강제 로딩인데, 회의후 구현결정
   * @request POST:/character/refresh
   * @response `200` `RefreshCharacterInfoUsingPostData` OK
   * @response `201` `void` Created
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  refreshCharacterInfoUsingPost = (
    query: {
      /**
       * id
       * @format int64
       */
      id: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<RefreshCharacterInfoUsingPostData, void>({
      path: `/character/refresh`,
      method: "POST",
      query: query,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags character-controller
   * @name SearchUserInfoUsingGet1
   * @summary 다중선택 필터
   * @request GET:/character/search
   * @response `200` `SearchUserInfoUsingGet1Data` OK
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  searchUserInfoUsingGet1 = (
    query: {
      /** charName */
      charName?: string;
      /**
       * id
       * @format int64
       */
      id?: number;
      /** job */
      job?: string;
      /**
       * level
       * @format int32
       */
      level?: number;
      /**
       * page
       * @format int32
       */
      page: number;
      /** userName */
      userName?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<SearchUserInfoUsingGet1Data, void>({
      path: `/character/search`,
      method: "GET",
      query: query,
      ...params,
    });
}
