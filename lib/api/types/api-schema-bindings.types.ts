import { paths } from './api-schema.types';

export type GetStatusApiResult = paths['/']['get']['responses'][200]['content']['application/json'];

export type MoveApiBody =
  paths['/my/{name}/action/move']['post']['requestBody']['content']['application/json'];
export type MoveApiResult =
  paths['/my/{name}/action/move']['post']['responses'][200]['content']['application/json'];

export type RestApiResult =
  paths['/my/{name}/action/rest']['post']['responses'][200]['content']['application/json'];

export type EquipItemApiBody =
  paths['/my/{name}/action/equip']['post']['requestBody']['content']['application/json'];
export type EquipItemApiResult =
  paths['/my/{name}/action/equip']['post']['responses'][200]['content']['application/json'];

export type UnequipItemApiBody =
  paths['/my/{name}/action/unequip']['post']['requestBody']['content']['application/json'];
export type UnequipItemApiResult =
  paths['/my/{name}/action/unequip']['post']['responses'][200]['content']['application/json'];

export type UseItemApiBody =
  paths['/my/{name}/action/use']['post']['requestBody']['content']['application/json'];
export type UseItemApiResult =
  paths['/my/{name}/action/use']['post']['responses'][200]['content']['application/json'];

export type FightApiResult =
  paths['/my/{name}/action/fight']['post']['responses'][200]['content']['application/json'];

export type GatheringApiResult =
  paths['/my/{name}/action/gathering']['post']['responses'][200]['content']['application/json'];

export type CraftingApiBody =
  paths['/my/{name}/action/crafting']['post']['requestBody']['content']['application/json'];
export type CraftingApiResult =
  paths['/my/{name}/action/crafting']['post']['responses'][200]['content']['application/json'];

export type DepositBankApiBody =
  paths['/my/{name}/action/bank/deposit']['post']['requestBody']['content']['application/json'];
export type DepositBankApiResult =
  paths['/my/{name}/action/bank/deposit']['post']['responses'][200]['content']['application/json'];

export type DepositBankGoldApiBody =
  paths['/my/{name}/action/bank/deposit/gold']['post']['requestBody']['content']['application/json'];
export type DepositBankGoldApiResult =
  paths['/my/{name}/action/bank/deposit/gold']['post']['responses'][200]['content']['application/json'];

export type WithdrawBankApiBody =
  paths['/my/{name}/action/bank/withdraw']['post']['requestBody']['content']['application/json'];
export type WithdrawBankApiResult =
  paths['/my/{name}/action/bank/withdraw']['post']['responses'][200]['content']['application/json'];

export type WithdrawBankGoldApiBody =
  paths['/my/{name}/action/bank/withdraw/gold']['post']['requestBody']['content']['application/json'];
export type WithdrawBankGoldApiResult =
  paths['/my/{name}/action/bank/withdraw/gold']['post']['responses'][200]['content']['application/json'];

export type BuyExpansionApiResult =
  paths['/my/{name}/action/bank/buy_expansion']['post']['responses'][200]['content']['application/json'];

export type RecyclingApiBody =
  paths['/my/{name}/action/recycling']['post']['requestBody']['content']['application/json'];
export type RecyclingApiResult =
  paths['/my/{name}/action/recycling']['post']['responses'][200]['content']['application/json'];

export type BuyGrandExchangeItemApiBody =
  paths['/my/{name}/action/grandexchange/buy']['post']['requestBody']['content']['application/json'];
export type BuyGrandExchangeItemApiResult =
  paths['/my/{name}/action/grandexchange/buy']['post']['responses'][200]['content']['application/json'];

export type CreateGrandExchangeSellOrderApiBody =
  paths['/my/{name}/action/grandexchange/sell']['post']['requestBody']['content']['application/json'];
export type CreateGrandExchangeSellOrderApiResult =
  paths['/my/{name}/action/grandexchange/sell']['post']['responses'][200]['content']['application/json'];

export type CancelGrandExchangeSellOrderApiBody =
  paths['/my/{name}/action/grandexchange/cancel']['post']['requestBody']['content']['application/json'];
export type CancelGrandExchangeSellOrderApiResult =
  paths['/my/{name}/action/grandexchange/cancel']['post']['responses'][200]['content']['application/json'];

export type AcceptTaskApiResult =
  paths['/my/{name}/action/task/new']['post']['responses'][200]['content']['application/json'];

export type CompleteTaskApiResult =
  paths['/my/{name}/action/task/complete']['post']['responses'][200]['content']['application/json'];

export type TradeTaskApiResult =
  paths['/my/{name}/action/task/trade']['post']['responses'][200]['content']['application/json'];

export type ExchangeTaskApiResult =
  paths['/my/{name}/action/task/exchange']['post']['responses'][200]['content']['application/json'];

export type CancelTaskApiResult =
  paths['/my/{name}/action/task/cancel']['post']['responses'][200]['content']['application/json'];

export type DeleteItemApiBody =
  paths['/my/{name}/action/delete']['post']['requestBody']['content']['application/json'];
export type DeleteItemApiResult =
  paths['/my/{name}/action/delete']['post']['responses'][200]['content']['application/json'];

export type GetLogsApiQuery = paths['/my/logs']['get']['parameters']['query'];
export type GetLogsApiResult =
  paths['/my/logs']['get']['responses'][200]['content']['application/json'];

export type GetCharactersApiResult =
  paths['/my/characters']['get']['responses'][200]['content']['application/json'];

export type CreateAccountApiBody =
  paths['/accounts/create']['post']['requestBody']['content']['application/json'];
export type CreateAccountApiResult =
  paths['/accounts/create']['post']['responses'][200]['content']['application/json'];

export type GetAccountAchievementsApiQuery =
  paths['/accounts/{account}/achievements']['get']['parameters']['query'];
export type GetAccountAchievementsApiResult =
  paths['/accounts/{account}/achievements']['get']['responses'][200]['content']['application/json'];

export type GetAccountApiQuery =
  paths['/accounts/{account}']['get']['parameters']['query'];
export type GetAccountApiResult =
  paths['/accounts/{account}']['get']['responses'][200]['content']['application/json'];

export type CreateCharacterApiBody =
  paths['/characters/create']['post']['requestBody']['content']['application/json'];
export type CreateCharacterApiResult =
  paths['/characters/create']['post']['responses'][200]['content']['application/json'];

export type GetAllCharactersApiResult =
  paths['/my/characters']['get']['responses'][200]['content']['application/json'];

export type GetCharacterApiResult =
  paths['/characters/{name}']['get']['responses'][200]['content']['application/json'];

export type GetAllEventsApiQuery = paths['/events']['get']['parameters']['query'];
export type GetAllEventsApiResult =
  paths['/events']['get']['responses'][200]['content']['application/json'];

export type GetGrandExchangeSellHistoryItemApiQuery =
  paths['/grandexchange/history/{code}']['get']['parameters']['query'];
export type GetGrandExchangeSellHistoryItemApiResult =
  paths['/grandexchange/history/{code}']['get']['responses'][200]['content']['application/json'];

export type GetGrandExchangeSellOrdersApiQuery =
  paths['/grandexchange/orders']['get']['parameters']['query'];
export type GetGrandExchangeSellOrdersApiResult =
  paths['/grandexchange/orders']['get']['responses'][200]['content']['application/json'];

export type GetGrandExchangeSellOrderItemApiQuery =
  paths['/grandexchange/orders/{id}']['get']['parameters']['query'];
export type GetGrandExchangeSellOrderItemApiResult =
  paths['/grandexchange/orders/{id}']['get']['responses'][200]['content']['application/json'];

export type GetAllItemsApiQuery = paths['/items']['get']['parameters']['query'];
export type GetAllItemsApiResult =
  paths['/items']['get']['responses'][200]['content']['application/json'];

export type GetItemApiResult =
  paths['/items/{code}']['get']['responses'][200]['content']['application/json'];

export type GetAllMapsApiQuery = paths['/maps']['get']['parameters']['query'];
export type GetAllMapsApiResult =
  paths['/maps']['get']['responses'][200]['content']['application/json'];

export type GetMapApiResult =
  paths['/maps/{x}/{y}']['get']['responses'][200]['content']['application/json'];

export type GetAllMonstersApiQuery = paths['/monsters']['get']['parameters']['query'];
export type GetAllMonstersApiResult =
  paths['/monsters']['get']['responses'][200]['content']['application/json'];

export type GetMonsterApiResult =
  paths['/monsters/{code}']['get']['responses'][200]['content']['application/json'];

export type GetBankItemsApiQuery = paths['/my/bank/items']['get']['parameters']['query'];
export type GetBankItemsApiResult =
  paths['/my/bank/items']['get']['responses'][200]['content']['application/json'];

export type GetBankApiResult =
  paths['/my/bank']['get']['responses'][200]['content']['application/json'];

export type ChangePasswordApiBody =
  paths['/my/change_password']['post']['requestBody']['content']['application/json'];
export type ChangePasswordApiResult =
  paths['/my/change_password']['post']['responses'][200]['content']['application/json'];

export type GetAllResourcesApiQuery = paths['/resources']['get']['parameters']['query'];
export type GetAllResourcesApiResult =
  paths['/resources']['get']['responses'][200]['content']['application/json'];

export type GetResourceApiResult =
  paths['/resources/{code}']['get']['responses'][200]['content']['application/json'];

export type GenerateTokenResult =
  paths['/token']['post']['responses'][200]['content']['application/json'];

export type DeleteCharacterApiBody =
  paths['/characters/delete']['post']['requestBody']['content']['application/json'];
export type DeleteCharacterApiResult =
  paths['/characters/delete']['post']['responses'][200]['content']['application/json'];

export type GetLeaderboardCharactersApiQuery = paths['/leaderboard/characters']['get']['parameters']['query'];
export type GetLeaderboardCharactersApiResult =
  paths['/leaderboard/characters']['get']['responses'][200]['content']['application/json'];

export type GetLeaderboardAccountsApiQuery = paths['/leaderboard/accounts']['get']['parameters']['query'];
export type GetLeaderboardAccountsApiResult =
  paths['/leaderboard/accounts']['get']['responses'][200]['content']['application/json'];

export type GetAllActiveEventsApiResult =
  paths['/events/active']['get']['responses'][200]['content']['application/json'];
