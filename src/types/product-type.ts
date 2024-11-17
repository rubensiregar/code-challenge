import type {
    ChainModifiers,
    Entry,
    EntryFieldTypes,
    EntrySkeletonType,
    LocaleCode,
} from "contentful";

export interface TypeGarajiProductFields {
    title: EntryFieldTypes.Symbol;
    grade: EntryFieldTypes.Symbol;
    price: EntryFieldTypes.Integer;
    alt: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    slug?: EntryFieldTypes.Symbol;
}

export interface TypeProductAsset {
    sys: { id: string };
    fields: {
        file: {
            url: string;
            details?: {
                size: number;
                image: {
                    width: number;
                    height: number;
                };
            };
            fileName?: string;
            contentType?: string;
        };
    };
}

export type TypeGarajiProductSkeleton = EntrySkeletonType<
    TypeGarajiProductFields,
    "garajiProduct"
    >;

export type TypeGarajiProduct<
    Modifiers extends ChainModifiers,
    Locales extends LocaleCode = LocaleCode
> = Entry<TypeGarajiProductSkeleton, Modifiers, Locales>;
