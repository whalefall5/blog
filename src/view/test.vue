<template>
  <div class="advanced">
    
    <div class="right-box">
      <div class="top-date">
      <div class="search-box">
        <div class="date-box">
          <button :class="{active:dateType=='DATE'}" @click="hourClick()">时</button>
          <button :class="{active:dateType=='WEEK'}" @click="dayClick()">日</button>
          <button :class="{active:dateType=='MONTH'}" @click="monthClick()">月</button>
          <span class="date-start">开始日期</span><el-date-picker
            v-model="startTime"
            size="mini" class="date-choice"
            @focus="dateType='AUTO'"
            :clearable="false"
            :type="dateType"
            :format="dateFormat">
          </el-date-picker>
          <span class="date-end">截止日期</span><el-date-picker
            v-model="endTime"
            size="mini" class="date-choice"
            @focus="dateType='AUTO'"
            :clearable="false"
            :type="dateType"
            :format="dateFormat">
          </el-date-picker>
          <!-- 刷新表格 -->
          
          <!-- 能源类型 -->
          
        </div>
      </div>
    </div>
     <div class="charts-box">
      
      <div class="chart-box-top" id="chart1">

      </div>
      <div class="chart-box-bottom-left">
        
      </div>
      <div class="chart-box-top-bottom-right">
        
      </div>
    </div>
    </div>
   
  </div>
</template>
<script>



export default {
  
  name: 'test',
  data() {
    return {
      eletricData:[],
      startTime: new Date(),
      endTime: new Date(),
      dateType:'date',
      allEnergyType:[],
      energyType: 'ELECTRICITY',
      dateFormat:"yyyy-MM-dd",
      treeData: [],
      activeGroup: '',
      energyUnitId:13,
      
    };
  },
  components: {
    
  },
  created() {
    
    
  },
  mounted() {
    this.$nextTick(() => {});
   
  },
  methods: {
    getLastDay(num = 1) {
      return new Date((new Date().getTime() - 24 * 60 * 60 * 1000 * num)).format('yyyy-MM-dd');
    },
    hourClick() {
      this.dateType = 'DATE';
      this.startTime = new Date();
      this.endTime = this.startTime;
      this.dateFormat="yyyy-MM-dd"
    },
    dayClick() {
      this.endTime = new Date();
      this.startTime = this.getLastDay((this.endTime.getMonth()) - 1);
      console.log(this.startTime)
      this.dateType = 'MONTH';
      this.dateFormat="yyyy-MM-dd"
    },
    monthClick() {
      this.endTime = new Date();
      this.startTime = new Date(`${this.endTime.format('yyyy-MM')}-01`);
      console.log(this.startTime)
      this.dateType = 'MONTH';
      this.dateFormat="yyyy-M"
    },
    
    
    
    
    
    
        
    
    // 表格初始化
   
    
        
    
  },
};
</script>

<style  scoped>

</style>
