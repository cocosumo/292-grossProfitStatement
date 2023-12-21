import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FormGrossProfitTable } from './formGrossProfitTable/FormGrossProfitTable';



const queryClient = new QueryClient();

/**
 * レコード詳細画面を表示した後のイベント処理
 * サブテーブルと一部メニューを非表示にします
 */
export const onIndexShowHandler = () => {


  const root = createRoot(document.getElementById('root') as Element);

  root.render(
    <QueryClientProvider client={queryClient}>
      <FormGrossProfitTable />
    </QueryClientProvider>,
  );

};
