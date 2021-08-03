import { Observable } from 'rxjs';
import type { RemoteConfig, Value as RemoteConfigValue } from 'firebase/remote-config';
export declare type AllParameters = {
    [key: string]: RemoteConfigValue;
};
export declare function getValue(remoteConfig: RemoteConfig, key: string): Observable<RemoteConfigValue>;
export declare function getString(remoteConfig: RemoteConfig, key: string): Observable<string>;
export declare function getNumber(remoteConfig: RemoteConfig, key: string): Observable<number>;
export declare function getBoolean(remoteConfig: RemoteConfig, key: string): Observable<boolean>;
export declare function getAll(remoteConfig: RemoteConfig): Observable<AllParameters>;
