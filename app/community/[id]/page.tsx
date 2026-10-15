import {getSiteUser} from '../../../lib/account-auth';
import Thread from './thread';
export const dynamic='force-dynamic';export const metadata={title:'Community thread'};
export default async function ThreadPage({params}:{params:Promise<{id:string}>}){const {id}=await params;return <ThreadContent id={id}/>}
async function ThreadContent({id}:{id:string}){const user=await getSiteUser();return <section className="wrap board thread-page"><a className="text-link" href="/community">Back to community</a><Thread id={id} signedIn={Boolean(user)} signInPath={'/account'}/></section>}
