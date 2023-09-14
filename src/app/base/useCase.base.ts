export abstract class UseCase<PossiblesUseCaseReturns> {
    abstract perform(...args: any[]): Promise<PossiblesUseCaseReturns>
}