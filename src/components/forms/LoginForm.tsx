import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { useLoginForm } from '@hooks/useLoginForm';

const LoginForm = () => {
  const { onSubmit, register, handleSubmit, errors } = useLoginForm();

  return (
    <div className="w-[300px]">
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="email" className="text-[#848992] text-sm inline-block mb-2">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Ваш email"
            className="placeholder:text-gray-400 text-xs"
            {...register('email')}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="password" className="text-[#848992] text-sm inline-block mb-2">
            Пароль
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Введите свой пароль"
            className="placeholder:text-gray-400 text-xs"
            {...register('password')}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
        <Button type="submit" variant="base" className="w-full">
          Войти
        </Button>
      </form>
    </div>
  );
};

export { LoginForm };
