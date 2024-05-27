export interface CharacterSearchRequestDto {
    charName?: string;
    id?: number;
    job?: string;
    level?: number;
    page: number;
    userDataId?: number;
}

export interface CharacterDeleteRequestDto {
    id: number
}

export interface CharacterResponseDto {
    avatar: string;
    banedInfo: string | null;
    charName: string;
    id: number;
    job: string;
    level: number;
    modifiedDate: string;
    ocid: string;
    pickByUser: boolean;
    userDataId: number;
    userName: string;
    world: string;
}
