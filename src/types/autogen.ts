export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export interface Address {
	line1?: string,
	line2?: string,
	line3?: string,
	sublocality?: string,
	city?: string,
	region?: string,
	postalCode?: string,
	extraDescription?: string,
	countryCode?: string,
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
}

export interface Fins_relatedServices {
	name?: string,
	description?: string,
	fins_servicesImage?: Image,
}

export interface Fins_featuredArticles {
	name?: string,
	shortDescription?: string,
	fins_articlePhoto?: ComplexImage,
}

export interface Fins_relatedProfessionals {
	name?: string,
	headshot?: Image,
	fins_jobTitle?: string,
	description?: string,
}

export default interface Locations {
	name: string,
	description: string,
	slug: string,
	photoGallery: ComplexImage[],
	logo: ComplexImage,
	emails: string[],
	address: Address,
	mainPhone: any,
	geocodedCoordinate: Coordinate,
	fins_relatedServices: Fins_relatedServices[],
	fins_featuredArticles: Fins_featuredArticles[],
	fins_relatedProfessionals: Fins_relatedProfessionals[],
}
