declare module '@apiverve/bucketlist' {
  export interface bucketlistOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface bucketlistResponse {
    status: string;
    error: string | null;
    data: BucketListData;
    code?: number;
  }


  interface BucketListData {
      bucketListItem: string;
  }

  export default class bucketlistWrapper {
    constructor(options: bucketlistOptions);

    execute(callback: (error: any, data: bucketlistResponse | null) => void): Promise<bucketlistResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: bucketlistResponse | null) => void): Promise<bucketlistResponse>;
    execute(query?: Record<string, any>): Promise<bucketlistResponse>;
  }
}
