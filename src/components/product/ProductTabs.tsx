import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type ProductTabsProps = {
  description: string;
  char: string;
};

const ProductTabs = ({ description, char }: ProductTabsProps) => {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="gap-5">
        <TabsTrigger value="account" className="text-base lg:text-xl">
          Описание
        </TabsTrigger>
        <TabsTrigger id="char" value="password" className="text-base lg:text-xl">
          Характеристики
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">{description}</TabsContent>
      <TabsContent value="password">{char}</TabsContent>
    </Tabs>
  );
};

export { ProductTabs };
