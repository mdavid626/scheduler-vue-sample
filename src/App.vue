<template>
    <bryntum-scheduler-pro
            :assignments = "assignments"
            :calendars = "calendars"
            :dependencies = "dependencies"
            :resources = "resources"
            :events = "events"
            v-bind = "schedulerProConfig"
    />
</template>

<script>
import { ref, reactive } from 'vue';

import { BryntumSchedulerPro } from '@bryntum/schedulerpro-vue-3';

import { useSchedulerProConfig } from '@/AppConfig';
import * as appData from '@/AppData';

export default {
    name : 'App',

    components : {
        BryntumSchedulerPro
    },

    setup() {
        const schedulerProConfig = reactive(useSchedulerProConfig());

        const assignments = ref(appData.assignments);
        const calendars = ref(appData.calendars);
        const dependencies = ref(appData.dependencies);
        const resources = ref(appData.resources);
        const events = ref(appData.events);

        return {
            schedulerProConfig,
            assignments,
            calendars,
            dependencies,
            resources,
            events
        };
    }
};
</script>

<style lang = "scss">
@import './App.scss';
</style>
