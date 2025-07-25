import { Input, Button, DatePicker } from "antd";
import moment from "moment";
import { Controller } from "react-hook-form";

const SearchFilter = ({
  onSubmit,
  register,
  handleSubmit,
  control,
  setValue,
  isLoading,
  defaultDate,
}) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col md:flex-row gap-4"
    >
      {/* Controlled keyword input */}
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

      {/* Controlled date input */}
      <Controller
        name="date"
        control={control}
        defaultValue={defaultDate}
        render={({ field }) => (
          <DatePicker
            format="YYYY-MM-DD"
            defaultValue={moment(defaultDate)}
            onChange={(date) => {
              if (date) {
                field.onChange(date.format("YYYY-MM-DD"));
              }
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
