export interface Launch {
  fairings: Fairings,
  links: {
    patch: {
      small: string,
      large: string
    },
    reddit: {
      campaign: string,
      launch: string,
      media: string,
      recovery: string
    },
    flickr: {
      small: string[],
      original: string[]
    },
    presskit: string,
    webcast: string,
    youtube_id: string,
    article: string,
    wikipedia: string
  },
  static_fire_date_utc: string,
  static_fire_date_unix: number,
  net: boolean,
  window: number,
  rocket: string,
  success: boolean,
  failures: Failures[],
  details: string,
  crew: string[],
  ships: string[],
  capsules: string[],
  payloads: string[],
  launchpad: string,
  flight_number: number,
  name: string,
  date_utc: string,
  date_unix: string,
  date_local: string,
  date_precision: string,
  upcoming: boolean,
  cores: Cores[],
  auto_update: boolean,
  tbd: boolean,
  launch_library_id: string,
  id: string
}

export interface Fairings {
  reused: boolean,
  recovery_attempt: boolean,
  recovered: boolean,
  ships: string[]
}
export interface Cores {
  core: string,
  flight: number,
  gridfins: boolean,
  legs: boolean,
  reused: boolean,
  landing_attempt: boolean,
  landing_success: boolean,
  landing_type: string,
  landpad: string
}

export interface Failures {
  time: number,
  altitude: number,
  reason: string
}

export interface query {
  name?: string,
  success?: boolean,
  date_utc?: {
    $gte?: string,
    $lte?: string
  }
}

