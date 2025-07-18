//TODO: Temp cookies to bypass newegg captcha

const newEggCookies = [
  {
    name: "NV%5FW57",
    value: "USA",
    domain: ".newegg.com",
    path: "/",
    expires: 1752863601.52065,
    httpOnly: false,
    secure: true,
  },
  {
    name: "NV%5FW62",
    value: "en",
    domain: ".newegg.com",
    path: "/",
    expires: 1752863601.520736,
    httpOnly: false,
    secure: true,
  },
  {
    name: "_gcl_au",
    value: "1.1.1089477584.1752226136",
    domain: ".newegg.com",
    path: "/",
    expires: 1752863601.609067,
    httpOnly: false,
    secure: false,
  },
  {
    name: "_ga",
    value: "GA1.1.1414305248.1752226136",
    domain: ".newegg.com",
    path: "/",
    expires: 1752863601.869232,
    httpOnly: false,
    secure: false,
  },
  {
    name: "JumpServer",
    value: "%7B%22Location%22%3A%22E11%22%2C%22ServerId%22%3A%2277%22%7D",
    domain: ".newegg.com",
    path: "/",
    expires: 1752863385.758449,
    httpOnly: false,
    secure: false,
  },
  {
    name: "CountryInfo",
    value: "%7B%22PopStamp%22%3A1752237203%2C%22IsDefaultRegion%22%3Afalse%7D",
    domain: ".newegg.com",
    path: "/",
    expires: 1767789203.290441,
    httpOnly: false,
    secure: true,
    sameSite: "Lax",
  },
  {
    name: "NVTC",
    value: "248326808.0001.467c4e4ed.1752226127.1752236444.1752256851.4",
    domain: ".newegg.com",
    path: "/",
    expires: 1767808850.324741,
    httpOnly: false,
    secure: true,
  },
  {
    name: "NID",
    value: "1j9D1j5z0M9D345z721752226133a79e40d899a539fd8482ca875a3f23e13",
    domain: ".newegg.com",
    path: "/",
    expires: 1767808850.324967,
    httpOnly: false,
    secure: true,
  },
  {
    name: "NE_STC_V1",
    value:
      "5081a3dcddf73b01b498a860fed2b03a3e9b1a0bc40c73b086db10c12866ccb017bf0abe",
    domain: "www.newegg.com",
    path: "/",
    expires: 1752260572.107185,
    httpOnly: true,
    secure: true,
  },
  {
    name: "NV%5FGAPREVIOUSPAGENAME",
    value: "product%20details",
    domain: ".newegg.com",
    path: "/",
    expires: 1752863601.572668,
    httpOnly: false,
    secure: true,
  },
  {
    name: "syf-widget-token",
    value: "11d11713-2ca0-43cd-bb69-739f7d0e8b2b",
    domain: "www.newegg.com",
    path: "/",
    expires: 1752265668.346326,
    httpOnly: false,
    secure: true,
  },
  {
    name: "__cf_bm",
    value:
      "4mEPFlJR4aINJi_AYsUK7Brjko69jlSpJ8qkvgzwYI0-1752258801-1.0.1.1-E2PRbvID87f0Sk1fMUsfywkU7pA4yqSKS4NyNCYEk1BsDoLLHXvxU_Te_l2cyzgzM1XtkKe.R3OO7AgdTpL5LAcnsQD_vZuCzuxDbFHkXbU",
    domain: ".newegg.com",
    path: "/",
    expires: 1752260601.263968,
    httpOnly: true,
    secure: true,
  },
  {
    name: "NV%5FCONFIGURATION",
    value:
      "#5%7B%22Sites%22%3A%7B%22USA%22%3A%7B%22Values%22%3A%7B%22w58%22%3A%22USD%22%7D%2C%22Exp%22%3A%222616258801%22%7D%7D%7D",
    domain: ".newegg.com",
    path: "/",
    expires: 1752863601.520883,
    httpOnly: false,
    secure: true,
  },
  {
    name: "_ga_TR46GG8HLR",
    value: "GS2.1.s1752256852$o4$g1$t1752258801$j60$l0$h675294346",
    domain: ".newegg.com",
    path: "/",
    expires: 1752863601.872293,
    httpOnly: false,
    secure: false,
  },
  {
    name: "NV_NVTCTIMESTAMP",
    value: "1752258805",
    domain: ".newegg.com",
    path: "/",
    expires: 1767810805.107113,
    httpOnly: true,
    secure: true,
  },
];

const amazonCookies = [
  {
    name: "session-id",
    value: "261-5001826-4004900",
    domain: ".amazon.in",
    path: "/",
    expires: 1768297451.015557,
    httpOnly: false,
    secure: true,
  },
  {
    name: "ubid-acbin",
    value: "257-9607332-0550357",
    domain: ".amazon.in",
    path: "/",
    expires: 1768297450.585834,
    httpOnly: false,
    secure: true,
  },
  {
    name: "s_cc",
    value: "true",
    domain: ".amazon.in",
    path: "/",
    expires: -1,
    httpOnly: false,
    secure: false,
  },
  {
    name: "sid",
    value:
      '"hYCgjLNVK3pTdPXeNCq1aQ==|UfGibmgc0odQTqFbw8NlR2vwPuF0rOPgj5UX+3swS5Q="',
    domain: ".amazon.in",
    path: "/",
    expires: 1764008944.358538,
    httpOnly: true,
    secure: true,
  },
  {
    name: "JSESSIONID",
    value: "B3C13043C68623085F9B73682663459C",
    domain: "www.amazon.in",
    path: "/",
    expires: -1,
    httpOnly: true,
    secure: true,
  },
  {
    name: "s_sq",
    value: "%5B%5BB%5D%5D",
    domain: ".amazon.in",
    path: "/",
    expires: -1,
    httpOnly: false,
    secure: false,
  },
  {
    name: "s_ppv",
    value: "96",
    domain: ".amazon.in",
    path: "/",
    expires: -1,
    httpOnly: false,
    secure: false,
  },
  {
    name: "at_check",
    value: "true",
    domain: ".amazon.in",
    path: "/",
    expires: -1,
    httpOnly: false,
    secure: false,
  },
  {
    name: "AMCVS_5E35755F5B7C1B910A495C46%40AdobeOrg",
    value: "1",
    domain: ".amazon.in",
    path: "/",
    expires: -1,
    httpOnly: false,
    secure: false,
  },
  {
    name: "csd-key",
    value:
      "eyJ3YXNtVGVzdGVkIjp0cnVlLCJ3YXNtQ29tcGF0aWJsZSI6dHJ1ZSwid2ViQ3J5cHRvVGVzdGVkIjpmYWxzZSwidiI6MSwia2lkIjoiN2I1MTE5Iiwia2V5IjoiaVhSbGFWdEtaU3R4U1paN21uTnZGZFNhTmZ3blhTNlNlYmh2bVozRFBPbmE1bTJNSGZJWkVLTXJhOVVSanVkQmRyWS9rNGNwMHlyNldnTWNycUVjRnpVbkQ3a3hYZTRyWU1PK25GOWlGaFJNc05uUWdRQkJxTlVEY1NDdmprTzRTRGhmeEtvQVROaS9RWVpPWmtFM0RHWXJyWkhwejhlS05OM1hJN1c2N1l3dEgzNUhrSEFTZXNTNFF0Y0t2RmVXZ1pFaXVlVFFFR0lFOVk3MFF4UVVFWGhaOFZBcGN4M3hmTHZONEhxdFowSCs3VUxXMWVTNW9FL2dYRnBIdGhMM2p6U1l3TjhMelRUdCtvNkk5cGgvWnkrR2JzdSszbzFTS1VzcGdJYmliVksyUzE3REgxNlU4dmdSVFpGMEdZMkUrSXB5NERReTlveGdMVWRNZDQwUTJ3PT0ifQ==",
    domain: "www.amazon.in",
    path: "/",
    expires: 1752933171.063007,
    httpOnly: false,
    secure: true,
  },
  {
    name: "rxc",
    value: "ADIZbm+9wux0sVxAuHI",
    domain: "www.amazon.in",
    path: "/",
    expires: 1752831849.661181,
    httpOnly: false,
    secure: false,
  },
  {
    name: "session-id-time",
    value: "2082787201l",
    domain: ".amazon.in",
    path: "/",
    expires: 1768297451.015758,
    httpOnly: false,
    secure: true,
  },
  {
    name: "sst-acbin",
    value:
      "Sst1|PQES0oxN7Qa8a39N8benne1xBwQsKPm-PDI_tCO-9z43-WMmXAYmG6K_VKG0BrKbi5O7vB7x20o0cX905tny7mn9wIz0HmTzsR1eMTmUDWLD4BlJPYyUwYnxU8WajqaZksJtMdiiU4HR7JJMLNhyoT2ANApzunqBHkLl2v7UF5-LyRFBGKDrK1Tpa4ePNvN1Sdipa5puo1WNV6wcj5ak_dGy_1BuIyZs3nKQHXEG_Zu8l5lCeUx06NEUzFnTXlTAp8yi",
    domain: ".amazon.in",
    path: "/",
    expires: 1768297451.01635,
    httpOnly: true,
    secure: true,
  },
  {
    name: "session-token",
    value:
      "8VeVmzCyMpNkJK6SdtbY/ZuntJhiALPyg/0jHCDZh+MVgXR7SDUZK1KJV5JJ0biNEGPxEb3tyNXgSMvzT9awYh7Uq2I+FwFPDUm5fhVomYf39XN7VOwl9YVu2KYxU93cPMsGBGSOKv00kc8FMOZmTyhn3N79ecr3p9wDbs8XH50lD53SAsJl77Zdx6/vQQwKP5uOQkXjF7MmeefVOo0kEcT6c2GwNcTltASmqkIiANa9ndjlDOUO+jWr2ZK7zTWHImvBJMdx5tN4tN2hTedQ8LKNcE3OAiFk0PlMOJSm+Dh2rkIrf+NcGRnN2pvfP7DQA/NdCUM4wcletJQnhJuesmuAhp+Kc64C",
    domain: ".amazon.in",
    path: "/",
    expires: 1768297451.299958,
    httpOnly: false,
    secure: true,
  },
  {
    name: "i18n-prefs",
    value: "INR",
    domain: ".amazon.in",
    path: "/",
    expires: 1768297451.300197,
    httpOnly: false,
    secure: false,
  },
  {
    name: "lc-acbin",
    value: "en_IN",
    domain: ".amazon.in",
    path: "/",
    expires: 1768297451.300436,
    httpOnly: false,
    secure: false,
  },
  {
    name: "csm-hit",
    value:
      "adb:adblk_yes&t:1752745456511&tb:s-1PKSEXC41JF4HR78DV6J|1752745454689",
    domain: "www.amazon.in",
    path: "/",
    expires: 1753350256.511906,
    httpOnly: false,
    secure: false,
  },
];

module.exports = { newEggCookies, amazonCookies };
