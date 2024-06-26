export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USERLOGO ="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer "+ process.env.REACT_APP_TMDB_KEY,
  }
};
export const IMAGE_CDN = "https://image.tmdb.org/t/p/w780";
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/23e51548-38c3-495f-897d-cf0a2eb11171/CA-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const supportedLanguages = [{id: "en", name: "English"}, {id: "fr", name: "French"}];
export const OPENAI_KEY = process.env.REACT_APP_GPT_APT_KEY;