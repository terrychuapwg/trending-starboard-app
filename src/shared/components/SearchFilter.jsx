import { Input, Button, DatePicker } from "antd";
import { Controller } from "react-hook-form";

const SearchFilter = ({
  onSubmit,
  handleSubmit,
  control,
  isLoading,
}) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col md:flex-row gap-4"
    >
      {/* Keyword input */}
      <Controller
        name="keyword"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            placeholder="Search keyword..."
            className="md:w-1/3"
          />
        )}
      />

      {/* Date input */}
      <Controller
        name="date"
        control={control}
        render={({ field }) => (
          <DatePicker
            format="YYYY-MM-DD"
            onChange={(date) => {
              field.onChange(date ? date.format("YYYY-MM-DD") : null);
            }}
          />
        )}
      />

      <Button type="primary" htmlType="submit" loading={isLoading}>
        Filter
      </Button>
    </form>
  );
};

export default SearchFilter;
