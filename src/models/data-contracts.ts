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

/** AccountBanRequest */
export interface AccountBanRequest {
  /** @format date */
  endPeriodDate?: string;
  reason?: string;
  /** @format int64 */
  userId?: number;
}

/** BanedAccountResponse */
export interface BanedAccountResponse {
  /** @format date */
  endPeriodDate?: string;
  /** @format int64 */
  id?: number;
  reason?: string;
  /** @format int64 */
  userDataId?: number;
  userEmail?: string;
}

/** BannerReNumberingRequestDto */
export interface BannerReNumberingRequestDto {
  reNumbering?: Record<string, number>;
}

/** BannerRequestDto */
export interface BannerRequestDto {
  text?: string;
  url?: string;
}

/** BannerResponseDto */
export interface BannerResponseDto {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  numbering?: number;
  text?: string;
  url?: string;
}

/** BannerUpdateDto */
export interface BannerUpdateDto {
  /** @format int64 */
  id?: number;
  text?: string;
  url?: string;
}

/** BoardResponseDto */
export interface BoardResponseDto {
  /** @format date */
  createdDate?: string;
  /** @format int64 */
  id?: number;
  /** @format int32 */
  likes?: number;
  /** @format date */
  modifiedDate?: string;
  text?: string;
  title?: string;
  typeName?: string;
  /** @format int64 */
  userDataId?: number;
  userName?: string;
  /** @format int32 */
  views?: number;
}

/** CharacterResponseDto */
export interface CharacterResponseDto {
  avatar?: string;
  /** @format date */
  banedInfo?: string;
  charName?: string;
  /** @format int64 */
  id?: number;
  job?: string;
  /** @format int32 */
  level?: number;
  /** @format date */
  modifiedDate?: string;
  ocid?: string;
  pickByUser?: boolean;
  /** @format int64 */
  userDataId?: number;
  userName?: string;
  world?: string;
}

/** ComplaintResponseDto */
export interface ComplaintResponseDto {
  category?: string;
  complainReason?: string;
  /** @format int64 */
  complainantId?: number;
  complainantName?: string;
  /** @format int64 */
  complainerId?: number;
  complainerName?: string;
  /** @format int64 */
  id?: number;
  /** @format int64 */
  targetId?: number;
}

/** ModelAndView */
export interface ModelAndView {
  empty?: boolean;
  model?: object;
  modelMap?: Record<string, object>;
  reference?: boolean;
  status?:
    | "ACCEPTED"
    | "ALREADY_REPORTED"
    | "BAD_GATEWAY"
    | "BAD_REQUEST"
    | "BANDWIDTH_LIMIT_EXCEEDED"
    | "CHECKPOINT"
    | "CONFLICT"
    | "CONTINUE"
    | "CREATED"
    | "DESTINATION_LOCKED"
    | "EXPECTATION_FAILED"
    | "FAILED_DEPENDENCY"
    | "FORBIDDEN"
    | "FOUND"
    | "GATEWAY_TIMEOUT"
    | "GONE"
    | "HTTP_VERSION_NOT_SUPPORTED"
    | "IM_USED"
    | "INSUFFICIENT_SPACE_ON_RESOURCE"
    | "INSUFFICIENT_STORAGE"
    | "INTERNAL_SERVER_ERROR"
    | "I_AM_A_TEAPOT"
    | "LENGTH_REQUIRED"
    | "LOCKED"
    | "LOOP_DETECTED"
    | "METHOD_FAILURE"
    | "METHOD_NOT_ALLOWED"
    | "MOVED_PERMANENTLY"
    | "MOVED_TEMPORARILY"
    | "MULTIPLE_CHOICES"
    | "MULTI_STATUS"
    | "NETWORK_AUTHENTICATION_REQUIRED"
    | "NON_AUTHORITATIVE_INFORMATION"
    | "NOT_ACCEPTABLE"
    | "NOT_EXTENDED"
    | "NOT_FOUND"
    | "NOT_IMPLEMENTED"
    | "NOT_MODIFIED"
    | "NO_CONTENT"
    | "OK"
    | "PARTIAL_CONTENT"
    | "PAYLOAD_TOO_LARGE"
    | "PAYMENT_REQUIRED"
    | "PERMANENT_REDIRECT"
    | "PRECONDITION_FAILED"
    | "PRECONDITION_REQUIRED"
    | "PROCESSING"
    | "PROXY_AUTHENTICATION_REQUIRED"
    | "REQUESTED_RANGE_NOT_SATISFIABLE"
    | "REQUEST_ENTITY_TOO_LARGE"
    | "REQUEST_HEADER_FIELDS_TOO_LARGE"
    | "REQUEST_TIMEOUT"
    | "REQUEST_URI_TOO_LONG"
    | "RESET_CONTENT"
    | "SEE_OTHER"
    | "SERVICE_UNAVAILABLE"
    | "SWITCHING_PROTOCOLS"
    | "TEMPORARY_REDIRECT"
    | "TOO_EARLY"
    | "TOO_MANY_REQUESTS"
    | "UNAUTHORIZED"
    | "UNAVAILABLE_FOR_LEGAL_REASONS"
    | "UNPROCESSABLE_ENTITY"
    | "UNSUPPORTED_MEDIA_TYPE"
    | "UPGRADE_REQUIRED"
    | "URI_TOO_LONG"
    | "USE_PROXY"
    | "VARIANT_ALSO_NEGOTIATES";
  view?: View;
  viewName?: string;
}

/** Pageable */
export interface Pageable {
  /** @format int64 */
  offset?: number;
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  paged?: boolean;
  sort?: Sort;
  unpaged?: boolean;
}

/** Sort */
export interface Sort {
  empty?: boolean;
  sorted?: boolean;
  unsorted?: boolean;
}

/** TypeAddRequestDto */
export interface TypeAddRequestDto {
  /** @example "Board, Layer" */
  boardType?: "Board" | "Layer";
  name?: string;
}

/** TypeReNumberingRequestDto */
export interface TypeReNumberingRequestDto {
  reNumbering?: Record<string, number>;
}

/** TypeResponseDto */
export interface TypeResponseDto {
  /** @format int64 */
  boardCount?: number;
  boardType?: string;
  name?: string;
  /** @format int32 */
  numbering?: number;
}

/** TypeUpdateRequestDto */
export interface TypeUpdateRequestDto {
  /** @format int64 */
  id?: number;
  name?: string;
}

/** UserDataIdRequest */
export interface UserDataIdRequest {
  /** @format int64 */
  userDataId?: number;
}

/** UserInfoResponse */
export interface UserInfoResponse {
  anonymous?: boolean;
  /** @format date */
  banedInfo?: string;
  /** @format date-time */
  createDateTime?: string;
  /** @format int64 */
  id?: number;
  /** @format date-time */
  modifiedDateTime?: string;
  /** @format int64 */
  pickCharId?: number;
  pickCharName?: string;
  userEmail?: string;
  userName?: string;
  userRole?: string;
}

/** UserRoleChangeRequest */
export interface UserRoleChangeRequest {
  /** @example "USER,ADMIN" */
  role?: string;
  /** @format int64 */
  userDataId?: number;
}

/** View */
export interface View {
  contentType?: string;
}

/** Page«BanedAccountResponse» */
export interface PageBanedAccountResponse {
  content?: BanedAccountResponse[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /** @format int32 */
  number?: number;
  /** @format int32 */
  numberOfElements?: number;
  pageable?: Pageable;
  /** @format int32 */
  size?: number;
  sort?: Sort;
  /** @format int64 */
  totalElements?: number;
  /** @format int32 */
  totalPages?: number;
}

/** Page«BoardResponseDto» */
export interface PageBoardResponseDto {
  content?: BoardResponseDto[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /** @format int32 */
  number?: number;
  /** @format int32 */
  numberOfElements?: number;
  pageable?: Pageable;
  /** @format int32 */
  size?: number;
  sort?: Sort;
  /** @format int64 */
  totalElements?: number;
  /** @format int32 */
  totalPages?: number;
}

/** Page«CharacterResponseDto» */
export interface PageCharacterResponseDto {
  content?: CharacterResponseDto[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /** @format int32 */
  number?: number;
  /** @format int32 */
  numberOfElements?: number;
  pageable?: Pageable;
  /** @format int32 */
  size?: number;
  sort?: Sort;
  /** @format int64 */
  totalElements?: number;
  /** @format int32 */
  totalPages?: number;
}

/** Page«ComplaintResponseDto» */
export interface PageComplaintResponseDto {
  content?: ComplaintResponseDto[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /** @format int32 */
  number?: number;
  /** @format int32 */
  numberOfElements?: number;
  pageable?: Pageable;
  /** @format int32 */
  size?: number;
  sort?: Sort;
  /** @format int64 */
  totalElements?: number;
  /** @format int32 */
  totalPages?: number;
}

/** Page«UserInfoResponse» */
export interface PageUserInfoResponse {
  content?: UserInfoResponse[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /** @format int32 */
  number?: number;
  /** @format int32 */
  numberOfElements?: number;
  pageable?: Pageable;
  /** @format int32 */
  size?: number;
  sort?: Sort;
  /** @format int64 */
  totalElements?: number;
  /** @format int32 */
  totalPages?: number;
}

export type DeleteBoardUsingDeleteData = object;

export type SearchUserInfoUsingGetData = PageBoardResponseDto;

export type DeleteCharacterUsingDeleteData = object;

export type RefreshCharacterInfoUsingPostData = CharacterResponseDto;

export type SearchUserInfoUsingGet1Data = PageCharacterResponseDto;

export type DeleteComplainUsingDeleteData = object;

export type DeleteTargetUsingDeleteData = object;

export type SearchBoardComplainUsingGetData = PageComplaintResponseDto;

export type DeleteComplainUsingDelete1Data = object;

export type DeleteTargetUsingDelete1Data = object;

export type SearchCommentComplainUsingGetData = PageComplaintResponseDto;

export type DeleteComplainUsingDelete2Data = object;

export type DeleteTargetUsingDelete2Data = object;

export type SearchReplyComplainUsingGetData = PageComplaintResponseDto;

export type ErrorUsingGetData = Record<string, object>;

export type ErrorUsingHeadData = Record<string, object>;

export type ErrorUsingPostData = Record<string, object>;

export type ErrorUsingPutData = Record<string, object>;

export type ErrorUsingDeleteData = Record<string, object>;

export type ErrorUsingOptionsData = Record<string, object>;

export type ErrorUsingPatchData = Record<string, object>;

export type GetTypeListUsingGetData = TypeResponseDto[];

export type AddTypeUsingPostData = object;

export type UpdateTypeUsingPutData = object;

export type DeleteTypeUsingDeleteData = object;

export type UpdateTypeNumberingUsingPatchData = object;

export type GetBannerListUsingGetData = BannerResponseDto[];

export type AddBannerUsingPostData = object;

export type BannerUpdateUsingPutData = object;

export type BannerDeleteUsingDeleteData = object;

export type BannerReNumberingUsingPatchData = object;

export type DeleteUserAccountUsingDeleteData = object;

export type AccountBlackListUsingGetData = PageBanedAccountResponse;

export type AccountBanUsingPostData = object;

export type ChangeRoleUsingPatchData = object;

export type PasswordUsingPatchData = object;

export type SearchUserInfoUsingGet2Data = PageUserInfoResponse;

export type AccountUnBanUsingPostData = object;
