import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  CreateAccountApiBody,
  CreateAccountApiResult,
  GetAccountAchievementsApiQuery,
  GetAccountAchievementsApiResult,
  GetAccountApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsAccountsApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) { }

  /** Create an account. */
  public create(body: CreateAccountApiBody): Promise<CreateAccountApiResult> {
    return this.httpClient.post<CreateAccountApiResult>(`/accounts/create`, { body });
  }

  /** Retrieve the details of an account. */
  public get(account: string): Promise<GetAccountApiResult> {
    return this.httpClient.get<GetAccountApiResult>(`/accounts/${account}`);
  }

  /** Retrieve the achievements of an account. */
  public getAchievements(
    account: string,
    params: GetAccountAchievementsApiQuery = {}
  ): Promise<GetAccountAchievementsApiResult> {
    return this.httpClient.get<GetAccountAchievementsApiResult>(`/accounts/${account}/achievements`, {
      query: params,
    });
  }
}
