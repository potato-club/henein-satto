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
  AccountBanRequest,
  AccountBanUsingPostData,
  AccountBlackListUsingGetData,
  AccountUnBanUsingPostData,
  ChangeRoleUsingPatchData,
  DeleteUserAccountUsingDeleteData,
  PasswordUsingPatchData,
  SearchUserInfoUsingGet2Data,
  UserDataIdRequest,
  UserRoleChangeRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 유저 조회 관련
   * @name DeleteUserAccountUsingDelete
   * @summary 계정 정보 삭제 및 관련 정보 모두 삭제 [최고 관리자 권한]
   * @request DELETE:/user
   * @response `200` `DeleteUserAccountUsingDeleteData` OK
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  deleteUserAccountUsingDelete = (userDataIdRequest: UserDataIdRequest, params: RequestParams = {}) =>
    this.request<DeleteUserAccountUsingDeleteData, void>({
      path: `/user`,
      method: "DELETE",
      body: userDataIdRequest,
      ...params,
    });
  /**
   * No description
   *
   * @tags 유저 조회 관련
   * @name AccountBlackListUsingGet
   * @summary 정지 상태 계정 리스트
   * @request GET:/user/ban
   * @response `200` `AccountBlackListUsingGetData` OK
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  accountBlackListUsingGet = (
    query: {
      /**
       * page
       * @format int32
       */
      page: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<AccountBlackListUsingGetData, void>({
      path: `/user/ban`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags 유저 조회 관련
   * @name AccountBanUsingPost
   * @summary 계정 정지, 파라미터로 user의 ID만 보내야함
   * @request POST:/user/ban
   * @response `200` `AccountBanUsingPostData` OK
   * @response `201` `void` Created
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  accountBanUsingPost = (accountBanRequest: AccountBanRequest, params: RequestParams = {}) =>
    this.request<AccountBanUsingPostData, void>({
      path: `/user/ban`,
      method: "POST",
      body: accountBanRequest,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 유저 조회 관련
   * @name ChangeRoleUsingPatch
   * @summary 권한 수정 [최고 관리자 권한]
   * @request PATCH:/user/change-role
   * @response `200` `ChangeRoleUsingPatchData` OK
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  changeRoleUsingPatch = (userRoleChangeRequest: UserRoleChangeRequest, params: RequestParams = {}) =>
    this.request<ChangeRoleUsingPatchData, void>({
      path: `/user/change-role`,
      method: "PATCH",
      body: userRoleChangeRequest,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 유저 조회 관련
   * @name PasswordUsingPatch
   * @summary 비번 재설정 [미구현]
   * @request PATCH:/user/init/password
   * @response `200` `PasswordUsingPatchData` OK
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  passwordUsingPatch = (params: RequestParams = {}) =>
    this.request<PasswordUsingPatchData, void>({
      path: `/user/init/password`,
      method: "PATCH",
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 유저 조회 관련
   * @name SearchUserInfoUsingGet2
   * @summary searchUserInfo
   * @request GET:/user/search
   * @response `200` `SearchUserInfoUsingGet2Data` OK
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  searchUserInfoUsingGet2 = (
    query: {
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
      /** pickChar */
      pickChar?: string;
      /** userName */
      userName?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<SearchUserInfoUsingGet2Data, void>({
      path: `/user/search`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags 유저 조회 관련
   * @name AccountUnBanUsingPost
   * @summary accountUnBan
   * @request POST:/user/unban
   * @response `200` `AccountUnBanUsingPostData` OK
   * @response `201` `void` Created
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  accountUnBanUsingPost = (userDataIdRequest: UserDataIdRequest, params: RequestParams = {}) =>
    this.request<AccountUnBanUsingPostData, void>({
      path: `/user/unban`,
      method: "POST",
      body: userDataIdRequest,
      type: ContentType.Json,
      ...params,
    });
}
