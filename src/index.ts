import Instance, * as Declarations from './DiskInstance';
import Manager from './DiskManager';
import DiskMgrError from './errors/DiskManagerError';

export default Manager;

export declare const DiskInstance: typeof Instance;

export declare const SortBy: typeof Declarations.SortBy;
export declare const ResourceType: typeof Declarations.ResourceType;

export declare const DiskManagerError: typeof DiskMgrError;

export declare type Resource = Declarations.Resource;
export declare type DiskStatus = Declarations.DiskStatus;
export declare type DirListOptions = Declarations.DirListOptions;
export declare type ResourceMetadata = Declarations.ResourceMetadata;
