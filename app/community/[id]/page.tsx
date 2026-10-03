import {getChatGPTUser,chatGPTSignInPath} from '../../chatgpt-auth';
import Thread from './thread';
export const dynamic='force-dynamic';export const metadata={title:'Community thread'};
export default async function ThreadPage({params}:{params:Promise<{id:string}>}){const {id}=await params;return <ThreadContent id={id}/>}
async function ThreadContent({id}:{id:string}){const user=await getChatGPTUser();return <section className="wrap board thread-page"><a className="text-link" href="/community">Back to community</a><Thread id={id} signedIn={Boolean(user)} signInPath={chatGPTSignInPath(`/community/${encodeURIComponent(id)}#comment`)}/></section>}
