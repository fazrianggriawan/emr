import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {

    data = new BehaviorSubject<any>(null);

    constructor() { }

    toFormGroup(questions: QuestionBase<string>[]) {
        const group: any = {};

        questions.forEach(question => {
            group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                : new FormControl(question.value || '');
        });
        return new FormGroup(group);
    }

}
