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
  DeleteComplainUsingDelete1Data,
  DeleteComplainUsingDelete2Data,
  DeleteComplainUsingDeleteData,
  DeleteTargetUsingDelete1Data,
  DeleteTargetUsingDelete2Data,
  DeleteTargetUsingDeleteData,
  SearchBoardComplainUsingGetData,
  SearchCommentComplainUsingGetData,
  SearchReplyComplainUsingGetData,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Complaint<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 신고 내역 삭제하기(무효)
   *
   * @tags board-complaint-controller
   * @name DeleteComplainUsingDelete
   * @summary deleteComplain
   * @request DELETE:/complaint/board
   * @response `200` `DeleteComplainUsingDeleteData` OK
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  deleteComplainUsingDelete = (
    query: {
      /**
       * id
       * @format int64
       */
      id: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteComplainUsingDeleteData, void>({
      path: `/complaint/board`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * @description targetId를 주셔야합니다.
   *
   * @tags board-complaint-controller
   * @name DeleteTargetUsingDelete
   * @summary 게시글 삭제하기
   * @request DELETE:/complaint/board/content
   * @response `200` `DeleteTargetUsingDeleteData` OK
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  deleteTargetUsingDelete = (
    query: {
      /**
       * targetId
       * @format int64
       */
      targetId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteTargetUsingDeleteData, void>({
      path: `/complaint/board/content`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * @description page 제외 모든 param은 AND 연산자로 적용됩니다.
   *
   * @tags board-complaint-controller
   * @name SearchBoardComplainUsingGet
   * @summary 다중 필터
   * @request GET:/complaint/board/search
   * @response `200` `SearchBoardComplainUsingGetData` OK
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  searchBoardComplainUsingGet = (
    query: {
      /** category */
      category?: string;
      /** complainantName */
      complainantName?: string;
      /** complainerName */
      complainerName?: string;
      /**
       * complainId
       * @format int64
       */
      complainId?: number;
      /**
       * page
       * @format int32
       */
      page: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<SearchBoardComplainUsingGetData, void>({
      path: `/complaint/board/search`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description 신고 내역 삭제하기(무효)
   *
   * @tags comment-complaint-controller
   * @name DeleteComplainUsingDelete1
   * @summary deleteComplain
   * @request DELETE:/complaint/comment
   * @response `200` `DeleteComplainUsingDelete1Data` OK
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  deleteComplainUsingDelete1 = (
    query: {
      /**
       * id
       * @format int64
       */
      id: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteComplainUsingDelete1Data, void>({
      path: `/complaint/comment`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * @description targetId를 주셔야합니다.
   *
   * @tags comment-complaint-controller
   * @name DeleteTargetUsingDelete1
   * @summary 댓글 삭제하기
   * @request DELETE:/complaint/comment/content
   * @response `200` `DeleteTargetUsingDelete1Data` OK
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  deleteTargetUsingDelete1 = (
    query: {
      /**
       * targetId
       * @format int64
       */
      targetId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteTargetUsingDelete1Data, void>({
      path: `/complaint/comment/content`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * @description page 제외 모든 param은 AND 연산자로 적용됩니다.
   *
   * @tags comment-complaint-controller
   * @name SearchCommentComplainUsingGet
   * @summary 다중 필터
   * @request GET:/complaint/comment/search
   * @response `200` `SearchCommentComplainUsingGetData` OK
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  searchCommentComplainUsingGet = (
    query: {
      /** category */
      category?: string;
      /** complainantName */
      complainantName?: string;
      /** complainerName */
      complainerName?: string;
      /**
       * complainId
       * @format int64
       */
      complainId?: number;
      /**
       * page
       * @format int32
       */
      page: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<SearchCommentComplainUsingGetData, void>({
      path: `/complaint/comment/search`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description 신고 내역 삭제하기(무효)
   *
   * @tags reply-complaint-controller
   * @name DeleteComplainUsingDelete2
   * @summary deleteComplain
   * @request DELETE:/complaint/reply
   * @response `200` `DeleteComplainUsingDelete2Data` OK
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  deleteComplainUsingDelete2 = (
    query: {
      /**
       * id
       * @format int64
       */
      id: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteComplainUsingDelete2Data, void>({
      path: `/complaint/reply`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * @description targetId를 주셔야합니다.
   *
   * @tags reply-complaint-controller
   * @name DeleteTargetUsingDelete2
   * @summary 대댓글 삭제하기
   * @request DELETE:/complaint/reply/content
   * @response `200` `DeleteTargetUsingDelete2Data` OK
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  deleteTargetUsingDelete2 = (
    query: {
      /**
       * targetId
       * @format int64
       */
      targetId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteTargetUsingDelete2Data, void>({
      path: `/complaint/reply/content`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * @description page 제외 모든 param은 AND 연산자로 적용됩니다.
   *
   * @tags reply-complaint-controller
   * @name SearchReplyComplainUsingGet
   * @summary 다중 필터
   * @request GET:/complaint/reply/search
   * @response `200` `SearchReplyComplainUsingGetData` OK
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  searchReplyComplainUsingGet = (
    query: {
      /** category */
      category?: string;
      /** complainantName */
      complainantName?: string;
      /** complainerName */
      complainerName?: string;
      /**
       * complainId
       * @format int64
       */
      complainId?: number;
      /**
       * page
       * @format int32
       */
      page: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<SearchReplyComplainUsingGetData, void>({
      path: `/complaint/reply/search`,
      method: "GET",
      query: query,
      ...params,
    });
}
