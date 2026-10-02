import {sqliteTable,text,integer,index} from 'drizzle-orm/sqlite-core';
export const posts=sqliteTable('posts',{id:text('id').primaryKey(),userId:text('user_id').notNull(),name:text('name').notNull(),body:text('body').notNull(),createdAt:integer('created_at').notNull()},t=>[index('idx_posts_created_at').on(t.createdAt),index('idx_posts_user_id').on(t.userId)]);
export const members=sqliteTable('members',{userId:text('user_id').primaryKey(),name:text('name').notNull(),joinedAt:integer('joined_at').notNull()});
