import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProductTabs = () => {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="gap-5">
        <TabsTrigger value="account">Описание</TabsTrigger>
        <TabsTrigger value="password">Характеристики</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, deleniti!
      </TabsContent>
      <TabsContent value="password">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ad?</TabsContent>
    </Tabs>
  );
};

export { ProductTabs };
