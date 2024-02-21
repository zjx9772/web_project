import { BasicColumn, FormSchema } from '@/components/Table';
import { Tag } from 'ant-design-vue';
import { h } from 'vue';

export const columns: BasicColumn[] = [
  {
    title: 'No',
    dataIndex: 'id',
  },
  {
    title: 'SerialNum',
    dataIndex: 'SerialNum',
  },
  {
    title: 'Date',
    dataIndex: 'Date',
  },
  {
    title: 'Time',
    dataIndex: 'Time',
  },
  {
    title: 'Compare_Result',
    dataIndex: 'CompareResult',
    customRender: ({ record }) => {
      const text = record.CompareResult;
      const enable = text === 'OK';
      const color = enable ? 'green' : 'red';
      return h(Tag, { color: color }, () => text);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: '[startTime, endTime]',
    label: 'Scan Date',
    component: 'RangePicker',
    colProps: { span: 10 },
    componentProps: {
      style: {
        width: '100%',
      },
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
      placeholder: ['StartTime', 'EndTime'],
    },
  },
];
