import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { useRegisterForm } from '@hooks/useRegisterForm';

const RegisterForm = () => {
  const { onSubmit, register, handleSubmit, errors } = useRegisterForm();

  return (
    <div className="w-[300px]">
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="name" className="text-[#848992] text-sm inline-block mb-2">
            Имя
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Ваше имя"
            className="placeholder:text-gray-400 text-xs"
            {...register('name')}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
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
            placeholder="Придумайте пароль"
            className="placeholder:text-gray-400 text-xs"
            {...register('password')}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
        <div>
          <Label htmlFor="confirmPassword" className="text-[#848992] text-sm inline-block mb-2">
            Подтвердите пароль
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Подтвердите свой пароль"
            className="placeholder:text-gray-400 text-xs"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
        </div>
        <Button type="submit" variant="base" className="w-full">
          Регистрация
        </Button>
      </form>
    </div>
  );
};

export { RegisterForm };
