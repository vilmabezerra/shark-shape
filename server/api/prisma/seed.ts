import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const EXERCISES = [
    {
      name: 'Leg Extension',
      img: 'https://www.sharkfitness.ch/10437-medium_default/body-solid-pro-select-leg-extension-leg-curl-combo-gcec-stk.jpg',
    },
    {
      name: 'Leg Press',
      img: 'https://www.sharkfitness.ch/10437-medium_default/body-solid-pro-select-leg-extension-leg-curl-combo-gcec-stk.jpg',
    },
  ];

  await prisma.exercise.createMany({
    data: EXERCISES.map(({ img, name }) => ({
      name,
      img,
    })),
  });

  const WORKOUT_PLANS = [
    {
      name: 'Shark Plan',
      startDate: new Date(),
      endDate: new Date(),
      createdAt: new Date(),
    },
  ];

  await prisma.workoutPlan.createMany({
    data: WORKOUT_PLANS.map(({ name, startDate, endDate, createdAt }) => ({
      name,
      startDate,
      endDate,
      createdAt,
    })),
  });

  const workoutPlans = await prisma.workoutPlan.findMany()

  const WORKOUTS = [
    {
      name: 'Quad',
      workoutPlanId: workoutPlans[0].id,
    },
  ];

  await prisma.workout.createMany({
    data: WORKOUTS.map(({ name, workoutPlanId }) => ({
      name,
      workoutPlanId,
    })),
  });

  const workouts = await prisma.workout.findMany();
  const exercises = await prisma.exercise.findMany();

  const WORKOUT_INFOS = [
    {
      workoutId: workouts[0].id,
      exerciseId: exercises[0].id,
      series: 3,
      repetitions: 12,
    },
    {
      workoutId: workouts[0].id,
      exerciseId: exercises[0].id,
      series: 4,
      repetitions: 12,
    },
  ];

  await prisma.workoutInfo.createMany({
    data: WORKOUT_INFOS.map(
      ({ workoutId, exerciseId, series, repetitions }) => ({
        workoutId,
        exerciseId,
        series,
        repetitions,
      }),
    ),
  });
}

main()
  .catch((e) => {
    console.error(e);

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
