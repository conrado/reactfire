import * as React from 'react';
import type { Auth } from 'firebase/auth';
import type { FirebaseDatabase } from 'firebase/database';
import type { FirebaseFirestore } from 'firebase/firestore';
import type { FirebasePerformance } from 'firebase/performance';
import type { StorageService } from 'firebase/storage';
import type { RemoteConfig } from 'firebase/remote-config';
import { FirebaseApp } from 'firebase/app';
import { ObservableStatus } from './useObservable';
import { ReactFireOptions } from '.';
declare type FirebaseSdks = Auth | FirebaseDatabase | FirebaseFirestore | FirebasePerformance | StorageService | RemoteConfig;
export declare const AuthProvider: (props: React.PropsWithChildren<{
    sdk: Auth;
}>) => JSX.Element;
export declare const DatabaseProvider: (props: React.PropsWithChildren<{
    sdk: FirebaseDatabase;
}>) => JSX.Element;
export declare const FirestoreProvider: (props: React.PropsWithChildren<{
    sdk: FirebaseFirestore;
}>) => JSX.Element;
export declare const PerformanceProvider: (props: React.PropsWithChildren<{
    sdk: FirebasePerformance;
}>) => JSX.Element;
export declare const StorageProvider: (props: React.PropsWithChildren<{
    sdk: StorageService;
}>) => JSX.Element;
export declare const RemoteConfigProvider: (props: React.PropsWithChildren<{
    sdk: RemoteConfig;
}>) => JSX.Element;
export declare const useAuth: () => Auth;
export declare const useDatabase: () => FirebaseDatabase;
export declare const useFirestore: () => FirebaseFirestore;
export declare const usePerformance: () => FirebasePerformance;
export declare const useStorage: () => StorageService;
export declare const useRemoteConfig: () => RemoteConfig;
declare type InitSdkHook<Sdk extends FirebaseSdks> = (initializer: (firebaseApp: FirebaseApp) => Promise<Sdk>, options?: ReactFireOptions<Sdk>) => ObservableStatus<Sdk>;
export declare const useInitAuth: InitSdkHook<Auth>;
export declare const useInitDatabase: InitSdkHook<FirebaseDatabase>;
export declare const useInitFirestore: InitSdkHook<FirebaseFirestore>;
export declare const useInitPerformance: InitSdkHook<FirebasePerformance>;
export declare const useInitRemoteConfig: InitSdkHook<RemoteConfig>;
export declare const useInitStorage: InitSdkHook<StorageService>;
export {};
