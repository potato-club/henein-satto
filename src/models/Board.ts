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

import { DeleteBoardUsingDeleteData, SearchUserInfoUsingGetData } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Board<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 게시판 관련
   * @name DeleteBoardUsingDelete
   * @summary deleteBoard
   * @request DELETE:/board
   * @response `200` `DeleteBoardUsingDeleteData` OK
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  deleteBoardUsingDelete = (
    query: {
      /**
       * id
       * @format int64
       */
      id: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteBoardUsingDeleteData, void>({
      path: `/board`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags 게시판 관련
   * @name SearchUserInfoUsingGet
   * @summary 다중선택 필터, 다중 필터를 하되 (type,id,userid) + 전문검색(content) 불가능
   * @request GET:/board/search
   * @response `200` `SearchUserInfoUsingGetData` OK
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  searchUserInfoUsingGet = (
    query: {
      /** content */
      content?: string;
      /**
       * id
       * @format int64
       */
      id?: number;
      /**
       * page
       * @format int32
       */
      page: number;
      /** type */
      type?: string;
      /**
       * userDataId
       * @format int64
       */
      userDataId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<SearchUserInfoUsingGetData, void>({
      path: `/board/search`,
      method: "GET",
      query: query,
      ...params,
    });
}
