/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface BoxInterface extends utils.Interface {
  functions: {
    "implementation()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "addMembers(address[])": FunctionFragment;
    "boxFactory()": FunctionFragment;
    "execute(address,bytes)": FunctionFragment;
    "getPayment(uint256)": FunctionFragment;
    "initialize()": FunctionFragment;
    "isMembers(address)": FunctionFragment;
    "memberMode()": FunctionFragment;
    "msgSender()": FunctionFragment;
    "multicall(bytes[])": FunctionFragment;
    "paymentPricesInToken(address)": FunctionFragment;
    "removeMembers(address[])": FunctionFragment;
    "setMemberMode(uint8)": FunctionFragment;
    "setPayment(address,uint256)": FunctionFragment;
    "subscribe(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "implementation"
      | "owner"
      | "renounceOwnership"
      | "transferOwnership"
      | "upgradeTo"
      | "addMembers"
      | "boxFactory"
      | "execute"
      | "getPayment"
      | "initialize"
      | "isMembers"
      | "memberMode"
      | "msgSender"
      | "multicall"
      | "paymentPricesInToken"
      | "removeMembers"
      | "setMemberMode"
      | "setPayment"
      | "subscribe"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addMembers",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "boxFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPayment",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isMembers", values: [string]): string;
  encodeFunctionData(
    functionFragment: "memberMode",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "msgSender", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "paymentPricesInToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMembers",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setMemberMode",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPayment",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "subscribe", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addMembers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "boxFactory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPayment", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isMembers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "memberMode", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "msgSender", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "paymentPricesInToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeMembers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMemberMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPayment", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "subscribe", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Upgraded(address)": EventFragment;
    "MemberAdded(address[],address,address,uint256)": EventFragment;
    "MemberModeSettle(uint8,address,address,uint256)": EventFragment;
    "MemberPriceSettle(address,uint256,address,address,uint256)": EventFragment;
    "MemberRemoved(address[],address,address,uint256)": EventFragment;
    "MemberSubscribe(address,uint256,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberModeSettle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberPriceSettle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberSubscribe"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface MemberAddedEventObject {
  members: string[];
  txFrom: string;
  txTo: string;
  txTs: BigNumber;
}
export type MemberAddedEvent = TypedEvent<
  [string[], string, string, BigNumber],
  MemberAddedEventObject
>;

export type MemberAddedEventFilter = TypedEventFilter<MemberAddedEvent>;

export interface MemberModeSettleEventObject {
  mode: number;
  txFrom: string;
  txTo: string;
  txTs: BigNumber;
}
export type MemberModeSettleEvent = TypedEvent<
  [number, string, string, BigNumber],
  MemberModeSettleEventObject
>;

export type MemberModeSettleEventFilter =
  TypedEventFilter<MemberModeSettleEvent>;

export interface MemberPriceSettleEventObject {
  token: string;
  priceInToken: BigNumber;
  txFrom: string;
  txTo: string;
  txTs: BigNumber;
}
export type MemberPriceSettleEvent = TypedEvent<
  [string, BigNumber, string, string, BigNumber],
  MemberPriceSettleEventObject
>;

export type MemberPriceSettleEventFilter =
  TypedEventFilter<MemberPriceSettleEvent>;

export interface MemberRemovedEventObject {
  members: string[];
  txFrom: string;
  txTo: string;
  txTs: BigNumber;
}
export type MemberRemovedEvent = TypedEvent<
  [string[], string, string, BigNumber],
  MemberRemovedEventObject
>;

export type MemberRemovedEventFilter = TypedEventFilter<MemberRemovedEvent>;

export interface MemberSubscribeEventObject {
  token: string;
  priceInToken: BigNumber;
  txFrom: string;
  txTo: string;
  txTs: BigNumber;
}
export type MemberSubscribeEvent = TypedEvent<
  [string, BigNumber, string, string, BigNumber],
  MemberSubscribeEventObject
>;

export type MemberSubscribeEventFilter = TypedEventFilter<MemberSubscribeEvent>;

export interface Box extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BoxInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    implementation(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    addMembers(
      __members: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    boxFactory(overrides?: CallOverrides): Promise<[string]>;

    execute(
      dest: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    getPayment(
      _iPayment: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    initialize(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    isMembers(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    memberMode(overrides?: CallOverrides): Promise<[number]>;

    msgSender(overrides?: CallOverrides): Promise<[string]>;

    multicall(
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    paymentPricesInToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    removeMembers(
      __members: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setMemberMode(
      _memberMode: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setPayment(
      _token: string,
      _priceInToken: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    subscribe(
      _token: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  implementation(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  addMembers(
    __members: string[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  boxFactory(overrides?: CallOverrides): Promise<string>;

  execute(
    dest: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  getPayment(
    _iPayment: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  initialize(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  isMembers(account: string, overrides?: CallOverrides): Promise<boolean>;

  memberMode(overrides?: CallOverrides): Promise<number>;

  msgSender(overrides?: CallOverrides): Promise<string>;

  multicall(
    data: BytesLike[],
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  paymentPricesInToken(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  removeMembers(
    __members: string[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setMemberMode(
    _memberMode: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setPayment(
    _token: string,
    _priceInToken: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  subscribe(
    _token: string,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    implementation(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTo(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addMembers(__members: string[], overrides?: CallOverrides): Promise<void>;

    boxFactory(overrides?: CallOverrides): Promise<string>;

    execute(
      dest: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getPayment(
      _iPayment: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    initialize(overrides?: CallOverrides): Promise<void>;

    isMembers(account: string, overrides?: CallOverrides): Promise<boolean>;

    memberMode(overrides?: CallOverrides): Promise<number>;

    msgSender(overrides?: CallOverrides): Promise<string>;

    multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;

    paymentPricesInToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeMembers(
      __members: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    setMemberMode(
      _memberMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPayment(
      _token: string,
      _priceInToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    subscribe(_token: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
    Upgraded(implementation?: string | null): UpgradedEventFilter;

    "MemberAdded(address[],address,address,uint256)"(
      members?: null,
      txFrom?: null,
      txTo?: null,
      txTs?: null
    ): MemberAddedEventFilter;
    MemberAdded(
      members?: null,
      txFrom?: null,
      txTo?: null,
      txTs?: null
    ): MemberAddedEventFilter;

    "MemberModeSettle(uint8,address,address,uint256)"(
      mode?: null,
      txFrom?: null,
      txTo?: null,
      txTs?: null
    ): MemberModeSettleEventFilter;
    MemberModeSettle(
      mode?: null,
      txFrom?: null,
      txTo?: null,
      txTs?: null
    ): MemberModeSettleEventFilter;

    "MemberPriceSettle(address,uint256,address,address,uint256)"(
      token?: null,
      priceInToken?: null,
      txFrom?: null,
      txTo?: null,
      txTs?: null
    ): MemberPriceSettleEventFilter;
    MemberPriceSettle(
      token?: null,
      priceInToken?: null,
      txFrom?: null,
      txTo?: null,
      txTs?: null
    ): MemberPriceSettleEventFilter;

    "MemberRemoved(address[],address,address,uint256)"(
      members?: null,
      txFrom?: null,
      txTo?: null,
      txTs?: null
    ): MemberRemovedEventFilter;
    MemberRemoved(
      members?: null,
      txFrom?: null,
      txTo?: null,
      txTs?: null
    ): MemberRemovedEventFilter;

    "MemberSubscribe(address,uint256,address,address,uint256)"(
      token?: null,
      priceInToken?: null,
      txFrom?: null,
      txTo?: null,
      txTs?: null
    ): MemberSubscribeEventFilter;
    MemberSubscribe(
      token?: null,
      priceInToken?: null,
      txFrom?: null,
      txTo?: null,
      txTs?: null
    ): MemberSubscribeEventFilter;
  };

  estimateGas: {
    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    addMembers(
      __members: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    boxFactory(overrides?: CallOverrides): Promise<BigNumber>;

    execute(
      dest: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    getPayment(
      _iPayment: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    isMembers(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    memberMode(overrides?: CallOverrides): Promise<BigNumber>;

    msgSender(overrides?: CallOverrides): Promise<BigNumber>;

    multicall(
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    paymentPricesInToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeMembers(
      __members: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setMemberMode(
      _memberMode: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setPayment(
      _token: string,
      _priceInToken: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    subscribe(
      _token: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    addMembers(
      __members: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    boxFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    execute(
      dest: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getPayment(
      _iPayment: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    isMembers(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    memberMode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    msgSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    multicall(
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    paymentPricesInToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeMembers(
      __members: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setMemberMode(
      _memberMode: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setPayment(
      _token: string,
      _priceInToken: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    subscribe(
      _token: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}