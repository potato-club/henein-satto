import {
  CharacterResponseDto,
  CharacterSearchRequestDto,
} from './character/model';
import { PageResponseDto } from './page-dto';

export * from './character/model';

const baseUrl = 'https://satto.henesisback.shop/';

// https://devjaewoo.tistory.com/163
const objectToParams = (object: Object): URLSearchParams => {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(object)) {
    if (value !== undefined) searchParams.append(key, value.toString());
  }

  return searchParams;
};

export type FetcherMapItem<Path extends string, Req, Res> = {
  path: Path;
  request: Req;
  response: Res;
};

export type FetcherMap = {
  characterSearch: FetcherMapItem<
    'character/search',
    CharacterSearchRequestDto,
    PageResponseDto<CharacterResponseDto>
  >;
  characterDelete: FetcherMapItem<
    'character',
    CharacterSearchRequestDto,
    PageResponseDto<CharacterResponseDto>
  >;
};

export interface FetcherOptions<
  T extends FetcherMapItem<Path, Req, Res>,
  Path extends string = T['path'],
  Req = T['request'],
  Res = T['response'],
> {
  path: Path;
  params: Req;
}

export async function fetcher<K extends keyof FetcherMap>(
  option: FetcherOptions<FetcherMap[K]>
): Promise<FetcherMap[K]['response']> {
  const response = await fetch(
    `${baseUrl}${option.path}?${objectToParams(option.params)}`,
  );

  return await response.json();
}
