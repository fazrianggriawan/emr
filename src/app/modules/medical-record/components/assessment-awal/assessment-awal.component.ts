import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AssessmentAwalService } from './assessment-awal.service';
import { QuestionBase } from './dynamic-form/question-base';
import { CheckboxQuestion } from './dynamic-form/question-checkbox';
import { DropdownQuestion } from './dynamic-form/question-dropdown';
import { TextboxQuestion } from './dynamic-form/question-textbox';
import { QuestionService } from './dynamic-form/question.service';

@Component({
    selector: 'app-assessment-awal',
    templateUrl: './assessment-awal.component.html',
    styleUrls: ['./assessment-awal.component.css'],
    providers: [QuestionService]
})
export class AssessmentAwalComponent implements OnInit {

    questions$: Observable<QuestionBase<any>[]> | undefined;

    constructor(
        private assessmentAwalService: AssessmentAwalService
    ) { }

    ngOnInit(): void {
        this.assessmentAwalService.getFormRuangan();
        this.assessmentAwalService.dataForm.subscribe(data => this.handleForm(data));
    }

    handleForm(data: any[]) {
        if (data.length > 0) {
            let questions: QuestionBase<string>[] = [];

            data.forEach((item: any) => {
                switch (item.controlType) {
                    case 'textbox':
                        questions.push(new TextboxQuestion(item));
                        break;
                    case 'dropdown':
                        questions.push(new DropdownQuestion(item));
                        break;
                    case 'checkbox':
                        questions.push(new CheckboxQuestion(item));
                        break;
                    default:
                        break;
                }
            });

            this.questions$ = of(questions.sort((a, b) => a.order - b.order))

        }

    }

}
