interface requestType {
  req: unknown;
  params: { teamName: string };
  method: string;
  url: string;
  statusCode: string;
}
interface responseType {
  status: (code: number) => { send: (msg: string | Array<teamDataType>) => void };
}
interface teamDataType {
  id: string;
  teamName: string;
  winningYears: Array<number>;
  venue: string;
}
interface playerDataType {
  id: string;
  name: string;
  nationality: string;
  image: string;
  stats: {
    matches: number;
    runs: number;
    wickets: number;
  };
}
interface teamDetailsType {
    [name: string]: {
      team: {
        captainId: string;
        wicketKeeperId: string;
      };
      players: Array<playerDataType>;
    };
  }