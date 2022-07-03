// @ https://github.com/marcusbelcher/google-books-api-example/blob/master/src/shared/services/api/google-books/GoogleBook.ts
export interface IndustryIdentifier {
    type: string;
    identifier: string;
}

export interface ReadingModes {
    text: boolean;
    image: boolean;
}

export interface PanelizationSummary {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
}

export interface VolumeInfo {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: IndustryIdentifier[];
    readingModes: ReadingModes;
    pageCount: number;
    printedPageCount: number;
    printType: string;
    categories: string[];
    averageRating: number;
    ratingsCount: number;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: PanelizationSummary;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

export interface Layer {
    layerId: string;
    volumeAnnotationsVersion: string;
}

export interface LayerInfo {
    layers: Layer[];
}

export interface ListPrice {
    amount: number;
    currencyCode: string;
}

export interface RetailPrice {
    amount: number;
    currencyCode: string;
}

export interface ListPrice2 {
    amountInMicros: number;
    currencyCode: string;
}

export interface RetailPrice2 {
    amountInMicros: number;
    currencyCode: string;
}

export interface Offer {
    finskyOfferType: number;
    listPrice: ListPrice2;
    retailPrice: RetailPrice2;
    giftable: boolean;
}

export interface SaleInfo {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice: ListPrice;
    retailPrice: RetailPrice;
    buyLink: string;
    offers: Offer[];
}

export interface Epub {
    isAvailable: boolean;
    acsTokenLink: string;
}

export interface Pdf {
    isAvailable: boolean;
    acsTokenLink: string;
}

export interface AccessInfo {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: Epub;
    pdf: Pdf;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}

export interface GoogleBook {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    layerInfo: LayerInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
}

export interface GoogleBooksAPIResults {
    kind: string;
    totalItems: number;
    items: GoogleBook[];
}