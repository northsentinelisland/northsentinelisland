import {env} from 'cloudflare:workers';
export function boardDb(){if(!env.DB)throw new Error('Messageboard storage is unavailable.');return env.DB;}
