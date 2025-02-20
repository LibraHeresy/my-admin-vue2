<template>
  <a-card style="border-radius: 10px" :bordered="false">
    <a-list item-layout="horizontal">
      <a-list-item>
        <a-list-item-meta>
          <template slot="description">
            <a-descriptions title="User Info">
              <a-descriptions-item label="UserName">
                Zhou Maomao
              </a-descriptions-item>
              <a-descriptions-item label="Telephone">
                1810000000
              </a-descriptions-item>
              <a-descriptions-item label="Live">
                Hangzhou, Zhejiang
              </a-descriptions-item>
              <a-descriptions-item label="Remark"> empty </a-descriptions-item>
              <a-descriptions-item label="Address">
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
              </a-descriptions-item>
            </a-descriptions>
          </template>
        </a-list-item-meta>
      </a-list-item>
      <a-list-item>
        <a-list-item-meta>
          <template slot="description">
            <a-descriptions title="User Info">
              <a-descriptions-item label="UserName">
                Zhou Maomao
              </a-descriptions-item>
              <a-descriptions-item label="Telephone">
                1810000000
              </a-descriptions-item>
              <a-descriptions-item label="Live">
                Hangzhou, Zhejiang
              </a-descriptions-item>
              <a-descriptions-item label="Remark"> empty </a-descriptions-item>
              <a-descriptions-item label="Address">
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
              </a-descriptions-item>
            </a-descriptions>
          </template>
        </a-list-item-meta>
      </a-list-item>
      <a-list-item>
        <a-list-item-meta>
          <template slot="description">
            <a-descriptions title="User Info" :column="1">
              <a-descriptions-item>
                <a-table
                  :columns="columns"
                  :data-source="data"
                  :pagination="false"
                />
              </a-descriptions-item>
            </a-descriptions>
          </template>
        </a-list-item-meta>
      </a-list-item>
      <a-list-item>
        <a-list-item-meta>
          <template slot="description">
            <a-descriptions title="User Info" :column="1">
              <a-descriptions-item>
                <a-table
                  :columns="columns"
                  :data-source="data"
                  :pagination="false"
                />
              </a-descriptions-item>
            </a-descriptions>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </a-card>
</template>

<script>
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export default {
  name: "DetailPage",
  data() {
    return {
      columns,
      data,
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
