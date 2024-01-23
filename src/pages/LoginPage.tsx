import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LoginForm } from '@components/forms/LoginForm';
import { RegisterForm } from '@components/forms/RegisterForm';
import { Section } from '@components/ui/section';

const LoginPage = () => {
  return (
    <Section className="flex justify-center">
      <Tabs defaultValue="account">
        <TabsList className="gap-5 justify-between">
          <TabsTrigger value="account">Вход</TabsTrigger>
          <TabsTrigger value="password">Регистрация</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="pt-5">
          <LoginForm />
        </TabsContent>
        <TabsContent value="password">
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </Section>
  );
};

export { LoginPage };
