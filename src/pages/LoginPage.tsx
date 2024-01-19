import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LoginForm } from '@components/LoginForm';
import { RegisterForm } from '@components/RegisterForm';

const LoginPage = () => {
  return (
    <section className="flex justify-center">
      <Tabs defaultValue="account">
        <TabsList className="gap-5 justify-between">
          <TabsTrigger value="account">Вход</TabsTrigger>
          <TabsTrigger value="password">Регистрация</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className='pt-5'>
          <LoginForm />
        </TabsContent>
        <TabsContent value="password">
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export { LoginPage };
