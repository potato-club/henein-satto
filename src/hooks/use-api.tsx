import useSWR from 'swr';

import { fetcher, FetcherMap, FetcherOptions } from '@/apis';

export function useApi<K extends keyof FetcherMap>(
  path: FetcherMap[K]['path'],
  params: FetcherMap[K]['request']
) {
  return useSWR<FetcherMap[K]['response'], any, FetcherOptions<FetcherMap[K]>>(
    { path, params },
    fetcher
  );

  if (params.page === 1) {
    return {
      data: {
        totalPages: 2,
        content: [
          {
            id: 2,
            avatar:
              'https://open.api.nexon.com/static/maplestory/Character/KJNCGAKLNPIHBHPMOCCNFINBNPGNLGIPBNGGDNHEMGBDIDOJPFACBAJKOMGNGGCCOFDOHMDOJMBMLGDHJBKNFHLDIJGAICMIODJDJEGMNOFFBLKGPEGFFFJHBKPPPFIGMGIDCNCIFGFAEBFMIDECGMNFJGFCENHFBDGIDPPAPNCJAGJJPDCECJGDAFNMJJKLMEHKLHAPDFFDHIKGBOEDOAOIKJGJIIMOACEDLBOPDBLMNGNNGEOMGGCDIIJJGNEC.png',
            ocid: 'a51d894a4b649f837d7b22e01fecaded',
            pickByUser: true,
            charName: '프돔이',
            world: '스카니아',
            job: '배틀메이지',
            level: 261,
            userDataId: 7,
            userName: '프돔',
            banedInfo: null,
            modifiedDate: '2024-04-01',
          },
          {
            id: 2,
            avatar:
              'https://open.api.nexon.com/static/maplestory/Character/KJNCGAKLNPIHBHPMOCCNFINBNPGNLGIPBNGGDNHEMGBDIDOJPFACBAJKOMGNGGCCOFDOHMDOJMBMLGDHJBKNFHLDIJGAICMIODJDJEGMNOFFBLKGPEGFFFJHBKPPPFIGMGIDCNCIFGFAEBFMIDECGMNFJGFCENHFBDGIDPPAPNCJAGJJPDCECJGDAFNMJJKLMEHKLHAPDFFDHIKGBOEDOAOIKJGJIIMOACEDLBOPDBLMNGNNGEOMGGCDIIJJGNEC.png',
            ocid: 'a51d894a4b649f837d7b22e01fecaded',
            pickByUser: true,
            charName: '프돔이',
            world: '스카니아',
            job: '배틀메이지',
            level: 261,
            userDataId: 7,
            userName: '프돔',
            banedInfo: null,
            modifiedDate: '2024-04-01',
          },
          {
            id: 2,
            avatar:
              'https://open.api.nexon.com/static/maplestory/Character/KJNCGAKLNPIHBHPMOCCNFINBNPGNLGIPBNGGDNHEMGBDIDOJPFACBAJKOMGNGGCCOFDOHMDOJMBMLGDHJBKNFHLDIJGAICMIODJDJEGMNOFFBLKGPEGFFFJHBKPPPFIGMGIDCNCIFGFAEBFMIDECGMNFJGFCENHFBDGIDPPAPNCJAGJJPDCECJGDAFNMJJKLMEHKLHAPDFFDHIKGBOEDOAOIKJGJIIMOACEDLBOPDBLMNGNNGEOMGGCDIIJJGNEC.png',
            ocid: 'a51d894a4b649f837d7b22e01fecaded',
            pickByUser: true,
            charName: '프돔이',
            world: '스카니아',
            job: '배틀메이지',
            level: 261,
            userDataId: 7,
            userName: '프돔',
            banedInfo: null,
            modifiedDate: '2024-04-01',
          },
          {
            id: 2,
            avatar:
              'https://open.api.nexon.com/static/maplestory/Character/KJNCGAKLNPIHBHPMOCCNFINBNPGNLGIPBNGGDNHEMGBDIDOJPFACBAJKOMGNGGCCOFDOHMDOJMBMLGDHJBKNFHLDIJGAICMIODJDJEGMNOFFBLKGPEGFFFJHBKPPPFIGMGIDCNCIFGFAEBFMIDECGMNFJGFCENHFBDGIDPPAPNCJAGJJPDCECJGDAFNMJJKLMEHKLHAPDFFDHIKGBOEDOAOIKJGJIIMOACEDLBOPDBLMNGNNGEOMGGCDIIJJGNEC.png',
            ocid: 'a51d894a4b649f837d7b22e01fecaded',
            pickByUser: true,
            charName: '프돔이',
            world: '스카니아',
            job: '배틀메이지',
            level: 261,
            userDataId: 7,
            userName: '프돔',
            banedInfo: null,
            modifiedDate: '2024-04-01',
          },
          {
            id: 2,
            avatar:
              'https://open.api.nexon.com/static/maplestory/Character/KJNCGAKLNPIHBHPMOCCNFINBNPGNLGIPBNGGDNHEMGBDIDOJPFACBAJKOMGNGGCCOFDOHMDOJMBMLGDHJBKNFHLDIJGAICMIODJDJEGMNOFFBLKGPEGFFFJHBKPPPFIGMGIDCNCIFGFAEBFMIDECGMNFJGFCENHFBDGIDPPAPNCJAGJJPDCECJGDAFNMJJKLMEHKLHAPDFFDHIKGBOEDOAOIKJGJIIMOACEDLBOPDBLMNGNNGEOMGGCDIIJJGNEC.png',
            ocid: 'a51d894a4b649f837d7b22e01fecaded',
            pickByUser: true,
            charName: '프돔이',
            world: '스카니아',
            job: '배틀메이지',
            level: 261,
            userDataId: 7,
            userName: '프돔',
            banedInfo: null,
            modifiedDate: '2024-04-01',
          },
          {
            id: 2,
            avatar:
              'https://open.api.nexon.com/static/maplestory/Character/KJNCGAKLNPIHBHPMOCCNFINBNPGNLGIPBNGGDNHEMGBDIDOJPFACBAJKOMGNGGCCOFDOHMDOJMBMLGDHJBKNFHLDIJGAICMIODJDJEGMNOFFBLKGPEGFFFJHBKPPPFIGMGIDCNCIFGFAEBFMIDECGMNFJGFCENHFBDGIDPPAPNCJAGJJPDCECJGDAFNMJJKLMEHKLHAPDFFDHIKGBOEDOAOIKJGJIIMOACEDLBOPDBLMNGNNGEOMGGCDIIJJGNEC.png',
            ocid: 'a51d894a4b649f837d7b22e01fecaded',
            pickByUser: true,
            charName: '프돔이',
            world: '스카니아',
            job: '배틀메이지',
            level: 261,
            userDataId: 7,
            userName: '프돔',
            banedInfo: null,
            modifiedDate: '2024-04-01',
          },
          {
            id: 2,
            avatar:
              'https://open.api.nexon.com/static/maplestory/Character/KJNCGAKLNPIHBHPMOCCNFINBNPGNLGIPBNGGDNHEMGBDIDOJPFACBAJKOMGNGGCCOFDOHMDOJMBMLGDHJBKNFHLDIJGAICMIODJDJEGMNOFFBLKGPEGFFFJHBKPPPFIGMGIDCNCIFGFAEBFMIDECGMNFJGFCENHFBDGIDPPAPNCJAGJJPDCECJGDAFNMJJKLMEHKLHAPDFFDHIKGBOEDOAOIKJGJIIMOACEDLBOPDBLMNGNNGEOMGGCDIIJJGNEC.png',
            ocid: 'a51d894a4b649f837d7b22e01fecaded',
            pickByUser: true,
            charName: '프돔이',
            world: '스카니아',
            job: '배틀메이지',
            level: 261,
            userDataId: 7,
            userName: '프돔',
            banedInfo: null,
            modifiedDate: '2024-04-01',
          },
          {
            id: 1,
            avatar:
              'https://open.api.nexon.com/static/maplestory/Character/ALDNOMMKLPCMEKPLLKJFFJALFKBLBCGJCGFMPFCGGLNGKJEFCBDMEMEEKDCBDOMMDKHEJHPFOHPDBNMPBFCOMHDBKAMAHLPOGLMCOBGOMGNNIAAHLGEMLPDKDDHANGFKJBKHDHFCGGNHJHMNNFDCLFKDNGEADDFKLOEGLDAAHPNDCIABHCEGHHOAIIAPAEIHMCEMBICABJOHNDPBBGKMAOCCDMAGPKJGIJECONEKHEILCBLGMAGOAEPPFIPNAPFB.png',
            ocid: '5a55350a865454d9c07d72cacbdf09fe',
            pickByUser: false,
            charName: '아이돌프돔',
            world: '스카니아',
            job: '엔젤릭버스터',
            level: 260,
            userDataId: 7,
            userName: '프돔',
            banedInfo: null,
            modifiedDate: '2024-04-01',
          },
        ],
      },
    };
  } else {
    return {
      data: {
        totalPages: 2,
        content: [
          {
            id: 3,
            avatar:
              'https://open.api.nexon.com/static/maplestory/Character/KJNCGAKLNPIHBHPMOCCNFINBNPGNLGIPBNGGDNHEMGBDIDOJPFACBAJKOMGNGGCCOFDOHMDOJMBMLGDHJBKNFHLDIJGAICMIODJDJEGMNOFFBLKGPEGFFFJHBKPPPFIGMGIDCNCIFGFAEBFMIDECGMNFJGFCENHFBDGIDPPAPNCJAGJJPDCECJGDAFNMJJKLMEHKLHAPDFFDHIKGBOEDOAOIKJGJIIMOACEDLBOPDBLMNGNNGEOMGGCDIIJJGNEC.png',
            ocid: 'a51d894a4b649f837d7b22e01fecaded',
            pickByUser: true,
            charName: '프돔이',
            world: '스카니아',
            job: '배틀메이지',
            level: 261,
            userDataId: 7,
            userName: '프돔',
            banedInfo: null,
            modifiedDate: '2024-04-01',
          },
          {
            id: 2,
            avatar:
              'https://open.api.nexon.com/static/maplestory/Character/KJNCGAKLNPIHBHPMOCCNFINBNPGNLGIPBNGGDNHEMGBDIDOJPFACBAJKOMGNGGCCOFDOHMDOJMBMLGDHJBKNFHLDIJGAICMIODJDJEGMNOFFBLKGPEGFFFJHBKPPPFIGMGIDCNCIFGFAEBFMIDECGMNFJGFCENHFBDGIDPPAPNCJAGJJPDCECJGDAFNMJJKLMEHKLHAPDFFDHIKGBOEDOAOIKJGJIIMOACEDLBOPDBLMNGNNGEOMGGCDIIJJGNEC.png',
            ocid: 'a51d894a4b649f837d7b22e01fecaded',
            pickByUser: true,
            charName: '프돔이',
            world: '스카니아',
            job: '배틀메이지',
            level: 261,
            userDataId: 7,
            userName: '프돔',
            banedInfo: null,
            modifiedDate: '2024-04-01',
          },
          {
            id: 2,
            avatar:
              'https://open.api.nexon.com/static/maplestory/Character/KJNCGAKLNPIHBHPMOCCNFINBNPGNLGIPBNGGDNHEMGBDIDOJPFACBAJKOMGNGGCCOFDOHMDOJMBMLGDHJBKNFHLDIJGAICMIODJDJEGMNOFFBLKGPEGFFFJHBKPPPFIGMGIDCNCIFGFAEBFMIDECGMNFJGFCENHFBDGIDPPAPNCJAGJJPDCECJGDAFNMJJKLMEHKLHAPDFFDHIKGBOEDOAOIKJGJIIMOACEDLBOPDBLMNGNNGEOMGGCDIIJJGNEC.png',
            ocid: 'a51d894a4b649f837d7b22e01fecaded',
            pickByUser: true,
            charName: '프돔이',
            world: '스카니아',
            job: '배틀메이지',
            level: 261,
            userDataId: 7,
            userName: '프돔',
            banedInfo: null,
            modifiedDate: '2024-04-01',
          },
          {
            id: 2,
            avatar:
              'https://open.api.nexon.com/static/maplestory/Character/KJNCGAKLNPIHBHPMOCCNFINBNPGNLGIPBNGGDNHEMGBDIDOJPFACBAJKOMGNGGCCOFDOHMDOJMBMLGDHJBKNFHLDIJGAICMIODJDJEGMNOFFBLKGPEGFFFJHBKPPPFIGMGIDCNCIFGFAEBFMIDECGMNFJGFCENHFBDGIDPPAPNCJAGJJPDCECJGDAFNMJJKLMEHKLHAPDFFDHIKGBOEDOAOIKJGJIIMOACEDLBOPDBLMNGNNGEOMGGCDIIJJGNEC.png',
            ocid: 'a51d894a4b649f837d7b22e01fecaded',
            pickByUser: true,
            charName: '프돔이',
            world: '스카니아',
            job: '배틀메이지',
            level: 261,
            userDataId: 7,
            userName: '프돔',
            banedInfo: null,
            modifiedDate: '2024-04-01',
          },
          {
            id: 2,
            avatar:
              'https://open.api.nexon.com/static/maplestory/Character/KJNCGAKLNPIHBHPMOCCNFINBNPGNLGIPBNGGDNHEMGBDIDOJPFACBAJKOMGNGGCCOFDOHMDOJMBMLGDHJBKNFHLDIJGAICMIODJDJEGMNOFFBLKGPEGFFFJHBKPPPFIGMGIDCNCIFGFAEBFMIDECGMNFJGFCENHFBDGIDPPAPNCJAGJJPDCECJGDAFNMJJKLMEHKLHAPDFFDHIKGBOEDOAOIKJGJIIMOACEDLBOPDBLMNGNNGEOMGGCDIIJJGNEC.png',
            ocid: 'a51d894a4b649f837d7b22e01fecaded',
            pickByUser: true,
            charName: '프돔이',
            world: '스카니아',
            job: '배틀메이지',
            level: 261,
            userDataId: 7,
            userName: '프돔',
            banedInfo: null,
            modifiedDate: '2024-04-01',
          },
          {
            id: 2,
            avatar:
              'https://open.api.nexon.com/static/maplestory/Character/KJNCGAKLNPIHBHPMOCCNFINBNPGNLGIPBNGGDNHEMGBDIDOJPFACBAJKOMGNGGCCOFDOHMDOJMBMLGDHJBKNFHLDIJGAICMIODJDJEGMNOFFBLKGPEGFFFJHBKPPPFIGMGIDCNCIFGFAEBFMIDECGMNFJGFCENHFBDGIDPPAPNCJAGJJPDCECJGDAFNMJJKLMEHKLHAPDFFDHIKGBOEDOAOIKJGJIIMOACEDLBOPDBLMNGNNGEOMGGCDIIJJGNEC.png',
            ocid: 'a51d894a4b649f837d7b22e01fecaded',
            pickByUser: true,
            charName: '프돔이',
            world: '스카니아',
            job: '배틀메이지',
            level: 261,
            userDataId: 7,
            userName: '프돔',
            banedInfo: null,
            modifiedDate: '2024-04-01',
          },
          {
            id: 2,
            avatar:
              'https://open.api.nexon.com/static/maplestory/Character/KJNCGAKLNPIHBHPMOCCNFINBNPGNLGIPBNGGDNHEMGBDIDOJPFACBAJKOMGNGGCCOFDOHMDOJMBMLGDHJBKNFHLDIJGAICMIODJDJEGMNOFFBLKGPEGFFFJHBKPPPFIGMGIDCNCIFGFAEBFMIDECGMNFJGFCENHFBDGIDPPAPNCJAGJJPDCECJGDAFNMJJKLMEHKLHAPDFFDHIKGBOEDOAOIKJGJIIMOACEDLBOPDBLMNGNNGEOMGGCDIIJJGNEC.png',
            ocid: 'a51d894a4b649f837d7b22e01fecaded',
            pickByUser: true,
            charName: '프돔이',
            world: '스카니아',
            job: '배틀메이지',
            level: 261,
            userDataId: 7,
            userName: '프돔',
            banedInfo: null,
            modifiedDate: '2024-04-01',
          },
          {
            id: 1,
            avatar:
              'https://open.api.nexon.com/static/maplestory/Character/ALDNOMMKLPCMEKPLLKJFFJALFKBLBCGJCGFMPFCGGLNGKJEFCBDMEMEEKDCBDOMMDKHEJHPFOHPDBNMPBFCOMHDBKAMAHLPOGLMCOBGOMGNNIAAHLGEMLPDKDDHANGFKJBKHDHFCGGNHJHMNNFDCLFKDNGEADDFKLOEGLDAAHPNDCIABHCEGHHOAIIAPAEIHMCEMBICABJOHNDPBBGKMAOCCDMAGPKJGIJECONEKHEILCBLGMAGOAEPPFIPNAPFB.png',
            ocid: '5a55350a865454d9c07d72cacbdf09fe',
            pickByUser: false,
            charName: '아이돌프돔',
            world: '스카니아',
            job: '엔젤릭버스터',
            level: 260,
            userDataId: 7,
            userName: '프돔',
            banedInfo: null,
            modifiedDate: '2024-04-01',
          },
        ],
      },
    };
  }
}
