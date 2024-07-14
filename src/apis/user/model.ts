export interface UserSearchRequestDto {
    id?: number;
    page: number;
    pickChar?: string;
    userName?: string;
}

export interface UserDeleteRequestDto {
    id: number;
}

export interface UserInfoResponseDto {
    anonymous: boolean;
    banedInfo: string | null;
    createDateTime: string;
    id: number;
    modifiedDateTime: string;
    pickCharId: number;
    pickCharName: string;
    userEmail: string;
    userName: string;
    userRole: string;
}
