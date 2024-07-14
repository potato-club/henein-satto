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
  AddBannerUsingPostData,
  AddTypeUsingPostData,
  BannerDeleteUsingDeleteData,
  BannerReNumberingRequestDto,
  BannerReNumberingUsingPatchData,
  BannerRequestDto,
  BannerUpdateDto,
  BannerUpdateUsingPutData,
  DeleteTypeUsingDeleteData,
  GetBannerListUsingGetData,
  GetTypeListUsingGetData,
  TypeAddRequestDto,
  TypeReNumberingRequestDto,
  TypeUpdateRequestDto,
  UpdateTypeNumberingUsingPatchData,
  UpdateTypeUsingPutData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Pad<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags board-pad-controller
   * @name GetTypeListUsingGet
   * @summary getTypeList
   * @request GET:/pad/board
   * @response `200` `GetTypeListUsingGetData` OK
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  getTypeListUsingGet = (params: RequestParams = {}) =>
    this.request<GetTypeListUsingGetData, void>({
      path: `/pad/board`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags board-pad-controller
   * @name AddTypeUsingPost
   * @summary addType
   * @request POST:/pad/board
   * @response `200` `AddTypeUsingPostData` OK
   * @response `201` `void` Created
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  addTypeUsingPost = (typeAddRequestDto: TypeAddRequestDto, params: RequestParams = {}) =>
    this.request<AddTypeUsingPostData, void>({
      path: `/pad/board`,
      method: "POST",
      body: typeAddRequestDto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags board-pad-controller
   * @name UpdateTypeUsingPut
   * @summary updateType
   * @request PUT:/pad/board
   * @response `200` `UpdateTypeUsingPutData` OK
   * @response `201` `void` Created
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  updateTypeUsingPut = (typeUpdateRequestDto: TypeUpdateRequestDto, params: RequestParams = {}) =>
    this.request<UpdateTypeUsingPutData, void>({
      path: `/pad/board`,
      method: "PUT",
      body: typeUpdateRequestDto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags board-pad-controller
   * @name DeleteTypeUsingDelete
   * @summary deleteType
   * @request DELETE:/pad/board
   * @response `200` `DeleteTypeUsingDeleteData` OK
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  deleteTypeUsingDelete = (
    query: {
      /**
       * id
       * @format int64
       */
      id: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteTypeUsingDeleteData, void>({
      path: `/pad/board`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags board-pad-controller
   * @name UpdateTypeNumberingUsingPatch
   * @summary updateTypeNumbering
   * @request PATCH:/pad/board/renumbering
   * @response `200` `UpdateTypeNumberingUsingPatchData` OK
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  updateTypeNumberingUsingPatch = (typeReNumberingRequestDto: TypeReNumberingRequestDto, params: RequestParams = {}) =>
    this.request<UpdateTypeNumberingUsingPatchData, void>({
      path: `/pad/board/renumbering`,
      method: "PATCH",
      body: typeReNumberingRequestDto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags notice-banner-pad-controller
   * @name GetBannerListUsingGet
   * @summary getBannerList
   * @request GET:/pad/notice/banner
   * @response `200` `GetBannerListUsingGetData` OK
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  getBannerListUsingGet = (params: RequestParams = {}) =>
    this.request<GetBannerListUsingGetData, void>({
      path: `/pad/notice/banner`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags notice-banner-pad-controller
   * @name AddBannerUsingPost
   * @summary addBanner
   * @request POST:/pad/notice/banner
   * @response `200` `AddBannerUsingPostData` OK
   * @response `201` `void` Created
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  addBannerUsingPost = (bannerRequestDto: BannerRequestDto, params: RequestParams = {}) =>
    this.request<AddBannerUsingPostData, void>({
      path: `/pad/notice/banner`,
      method: "POST",
      body: bannerRequestDto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags notice-banner-pad-controller
   * @name BannerUpdateUsingPut
   * @summary bannerUpdate
   * @request PUT:/pad/notice/banner
   * @response `200` `BannerUpdateUsingPutData` OK
   * @response `201` `void` Created
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  bannerUpdateUsingPut = (bannerUpdateDto: BannerUpdateDto, params: RequestParams = {}) =>
    this.request<BannerUpdateUsingPutData, void>({
      path: `/pad/notice/banner`,
      method: "PUT",
      body: bannerUpdateDto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags notice-banner-pad-controller
   * @name BannerDeleteUsingDelete
   * @summary bannerDelete
   * @request DELETE:/pad/notice/banner
   * @response `200` `BannerDeleteUsingDeleteData` OK
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  bannerDeleteUsingDelete = (
    query: {
      /**
       * id
       * @format int64
       */
      id: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BannerDeleteUsingDeleteData, void>({
      path: `/pad/notice/banner`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags notice-banner-pad-controller
   * @name BannerReNumberingUsingPatch
   * @summary bannerReNumbering
   * @request PATCH:/pad/notice/banner/renumbering
   * @response `200` `BannerReNumberingUsingPatchData` OK
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  bannerReNumberingUsingPatch = (reNumberingRequestDto: BannerReNumberingRequestDto, params: RequestParams = {}) =>
    this.request<BannerReNumberingUsingPatchData, void>({
      path: `/pad/notice/banner/renumbering`,
      method: "PATCH",
      body: reNumberingRequestDto,
      type: ContentType.Json,
      ...params,
    });
}
