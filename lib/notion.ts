import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID || 'ebd4a046254246cafb8ec66ace8e9913b';

export interface Case {
  company: string;
  industry: string;
  task: string;
  before: string;
  after: string;
  reduction: string;
  effect: string;
}

export async function getCases(): Promise<Case[]> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: 'Status',
        select: {
          equals: 'Published',
        },
      },
      sorts: [{ property: 'Company', direction: 'ascending' }],
    });

    return response.results.map((page: any) => ({
      company: page.properties.Company?.title[0]?.plain_text || '',
      industry: page.properties.Industry?.select?.name || '',
      task: page.properties.Task?.rich_text[0]?.plain_text || '',
      before: page.properties.Before?.rich_text[0]?.plain_text || '',
      after: page.properties.After?.rich_text[0]?.plain_text || '',
      reduction: page.properties.Reduction?.rich_text[0]?.plain_text || '',
      effect: page.properties.Effect?.rich_text[0]?.plain_text || '',
    }));
  } catch (error) {
    console.error('Failed to fetch cases from Notion:', error);
    return [];
  }
}
